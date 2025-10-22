/**
 * tkr-context-kit Logging Client
 * Client library for sending logs to the unified tkr-context-kit logging system
 */

import type {
  LogLevel,
  LogEntry,
  LoggingService,
  LogServiceConfig
} from '@tkr-context-kit/core';

// Re-export core types for convenience
export type { LogLevel, LogEntry } from '@tkr-context-kit/core';

export interface LogMetadata {
  [key: string]: any;
}

export interface AutoCaptureOptions {
  /** Enable automatic console.log/warn/error/debug capture */
  console?: boolean;
  /** Capture uncaught exceptions and unhandled promise rejections */
  unhandledErrors?: boolean;
  /** Enable Express.js request/response logging */
  express?: boolean;
  /** Enable React error boundaries and component lifecycle logging */
  react?: boolean;
}

export interface TkrLoggerConfig {
  /** The base URL of the tkr-context-kit API server (default: http://localhost:42003) */
  baseUrl?: string;
  /** The name of your service/application */
  service: string;
  /** The type of service (frontend, backend, cli, etc.) */
  serviceType?: string;
  /** Default source name for logs */
  defaultSource?: string;
  /** Whether to fail silently on errors (default: true) */
  failSilently?: boolean;
  /** Whether to also log to console (default: true) */
  logToConsole?: boolean;
  /** Minimum log level to send (default: 'debug') */
  minLevel?: LogLevel;
  /** Auto-capture configuration */
  autoCapture?: AutoCaptureOptions;
  /** Use HTTP transport instead of direct LoggingService (for remote logging) */
  useHttpTransport?: boolean;
  /** Optional LoggingService instance (for direct logging) */
  loggingService?: LoggingService;
}

const LOG_LEVELS: Record<LogLevel, number> = {
  FATAL: 5,
  fatal: 5,
  ERROR: 4,
  error: 4,
  WARN: 3,
  warn: 3,
  INFO: 2,
  info: 2,
  DEBUG: 1,
  debug: 1,
  TRACE: 0,
  trace: 0
};

export class TkrLogger {
  private config: Required<Omit<TkrLoggerConfig, 'autoCapture' | 'loggingService'>> & {
    autoCapture?: AutoCaptureOptions;
    loggingService?: LoggingService;
  };
  private originalConsole: Record<string, Function> = {};
  private errorHandlersSetup = false;
  private loggingService?: LoggingService;

  constructor(config: TkrLoggerConfig) {
    this.config = {
      baseUrl: config.baseUrl || 'http://localhost:42003',
      service: config.service,
      serviceType: config.serviceType || 'backend',
      defaultSource: config.defaultSource || 'client',
      failSilently: config.failSilently !== false,
      logToConsole: config.logToConsole !== false,
      minLevel: config.minLevel || 'debug',
      useHttpTransport: config.useHttpTransport !== false,
      autoCapture: config.autoCapture,
      loggingService: config.loggingService
    };

    // Store reference to LoggingService if provided
    this.loggingService = config.loggingService;

    // Initialize auto-capture features
    this.initializeAutoCapture();
  }

  /**
   * Check if a log level should be sent based on minLevel configuration
   */
  private shouldLog(level: LogLevel): boolean {
    return LOG_LEVELS[level] >= LOG_LEVELS[this.config.minLevel];
  }

  /**
   * Send a log entry using the unified LoggingService or HTTP transport
   */
  private async sendLog(
    level: LogLevel,
    message: string,
    metadata?: LogMetadata,
    source?: string
  ): Promise<void> {
    if (!this.shouldLog(level)) {
      return;
    }

    // Log to console if enabled
    if (this.config.logToConsole) {
      const normalizedLevel = level.toLowerCase() as 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace';
      const consoleMethod = normalizedLevel === 'fatal' ? 'error' : normalizedLevel === 'trace' ? 'debug' : normalizedLevel;

      // Use type assertion for console access since we know these methods exist
      if (consoleMethod in console && typeof (console as any)[consoleMethod] === 'function') {
        (console as any)[consoleMethod](`[${level.toUpperCase()}] ${this.config.service}/${source || this.config.defaultSource}: ${message}`, metadata || '');
      }
    }

    try {
      // Use direct LoggingService if available
      if (this.loggingService && !this.config.useHttpTransport) {
        await this.loggingService.log(
          level,
          message,
          metadata || {},
          this.config.service,
          source || this.config.defaultSource
        );
        return;
      }

      // Fall back to HTTP transport
      const logData = {
        timestamp: Date.now(),
        level: level,
        service: this.config.service,
        source: source || this.config.defaultSource,
        message,
        metadata: metadata || {}
      };

      const response = await fetch(`${this.config.baseUrl}/api/logs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logData)
      });

      if (!response.ok && !this.config.failSilently) {
        throw new Error(`Failed to send log: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      if (!this.config.failSilently) {
        throw error;
      }
      // Silently fail - maybe log to console as fallback
      if (this.config.logToConsole) {
        console.warn('Failed to send log to tkr-context-kit:', error);
      }
    }
  }

  /**
   * Log a debug message
   */
  debug(message: string, metadata?: LogMetadata, source?: string): void {
    this.sendLog('debug', message, metadata, source).catch(() => {});
  }

  /**
   * Log an info message
   */
  info(message: string, metadata?: LogMetadata, source?: string): void {
    this.sendLog('info', message, metadata, source).catch(() => {});
  }

  /**
   * Log a warning message
   */
  warn(message: string, metadata?: LogMetadata, source?: string): void {
    this.sendLog('warn', message, metadata, source).catch(() => {});
  }

  /**
   * Log an error message
   */
  error(message: string, error?: Error, metadata?: LogMetadata, source?: string): void {
    const errorMetadata = {
      ...metadata,
      ...(error && {
        error: {
          name: error.name,
          message: error.message,
          stack: error.stack
        }
      })
    };
    this.sendLog('error', message, errorMetadata, source).catch(() => {});
  }

  /**
   * Log a fatal error message
   */
  fatal(message: string, error?: Error, metadata?: LogMetadata, source?: string): void {
    const errorMetadata = {
      ...metadata,
      ...(error && {
        error: {
          name: error.name,
          message: error.message,
          stack: error.stack
        }
      })
    };
    this.sendLog('fatal', message, errorMetadata, source).catch(() => {});
  }

  /**
   * Log a trace message (if supported)
   */
  trace(message: string, metadata?: LogMetadata, source?: string): void {
    this.sendLog('trace', message, metadata, source).catch(() => {});
  }

  /**
   * Create a child logger with a specific source name
   */
  child(source: string): ComponentLogger {
    return new ComponentLogger(this, source);
  }

  /**
   * Initialize auto-capture features based on configuration
   */
  private initializeAutoCapture(): void {
    if (!this.config.autoCapture) return;

    if (this.config.autoCapture.console) {
      this.enableConsoleCapture();
    }

    if (this.config.autoCapture.unhandledErrors) {
      this.enableErrorCapture();
    }
  }

  /**
   * Enable automatic console logging capture
   */
  private enableConsoleCapture(): void {
    // Store original methods
    this.originalConsole = {
      log: console.log,
      info: console.info,
      warn: console.warn,
      error: console.error,
      debug: console.debug
    };

    // Replace console methods
    console.log = (...args: any[]) => {
      this.info(this.formatArgs(args), { source: 'console.log' }, 'Console');
      this.originalConsole.log(...args);
    };

    console.info = (...args: any[]) => {
      this.info(this.formatArgs(args), { source: 'console.info' }, 'Console');
      this.originalConsole.info(...args);
    };

    console.warn = (...args: any[]) => {
      this.warn(this.formatArgs(args), { source: 'console.warn' }, 'Console');
      this.originalConsole.warn(...args);
    };

    console.error = (...args: any[]) => {
      this.error(this.formatArgs(args), undefined, { source: 'console.error' }, 'Console');
      this.originalConsole.error(...args);
    };

    console.debug = (...args: any[]) => {
      this.debug(this.formatArgs(args), { source: 'console.debug' }, 'Console');
      this.originalConsole.debug(...args);
    };
  }

  /**
   * Format console arguments into a string
   */
  private formatArgs(args: any[]): string {
    return args.map(arg => {
      if (typeof arg === 'object') {
        try {
          return JSON.stringify(arg, null, 2);
        } catch {
          return String(arg);
        }
      }
      return String(arg);
    }).join(' ');
  }

  /**
   * Enable global error and unhandled rejection capture
   */
  private enableErrorCapture(): void {
    if (this.errorHandlersSetup) return;
    this.errorHandlersSetup = true;

    // Node.js error handlers
    if (typeof process !== 'undefined' && process && typeof process.on === 'function') {
      const nodeProcess = process as any;
      nodeProcess.on('uncaughtException', (error: Error) => {
        this.fatal('Uncaught Exception', error, {}, 'Process');
      });

      nodeProcess.on('unhandledRejection', (reason: any, promise: Promise<any>) => {
        const error = reason instanceof Error ? reason : new Error(String(reason));
        this.error('Unhandled Promise Rejection', error, {
          promise: promise.toString()
        }, 'Process');
      });
    }

    // Browser error handlers
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event: ErrorEvent) => {
        this.error('Global Error', new Error(event.message), {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno
        }, 'Browser');
      });

      window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
        const error = event.reason instanceof Error ? event.reason : new Error(String(event.reason));
        this.error('Unhandled Promise Rejection', error, {}, 'Browser');
      });
    }
  }

  /**
   * Disable console capture and restore original methods
   */
  disableConsoleCapture(): void {
    if (Object.keys(this.originalConsole).length > 0) {
      Object.assign(console, this.originalConsole);
      this.originalConsole = {};
    }
  }

  /**
   * Create Express middleware for request/response logging
   */
  createExpressMiddleware() {
    const logger = this;
    
    return {
      requestLogger: (req: any, res: any, next: Function) => {
        const start = Date.now();
        logger.info(`→ ${req.method} ${req.path}`, {
          method: req.method,
          path: req.path,
          ip: req.ip,
          userAgent: req.get('User-Agent')
        }, 'HTTP');

        res.on('finish', () => {
          const duration = Date.now() - start;
          if (res.statusCode >= 400) {
            logger.error(`← ${req.method} ${req.path} ${res.statusCode}`, undefined, {
              method: req.method,
              path: req.path,
              statusCode: res.statusCode,
              duration
            }, 'HTTP');
          } else {
            logger.info(`← ${req.method} ${req.path} ${res.statusCode}`, {
              method: req.method,
              path: req.path,
              statusCode: res.statusCode,
              duration
            }, 'HTTP');
          }
        });

        next();
      },

      errorHandler: (err: Error, req: any, res: any, next: Function) => {
        logger.error(`Express Error: ${err.message}`, err, {
          method: req.method,
          path: req.path,
          statusCode: res.statusCode
        }, 'ExpressError');
        next(err);
      }
    };
  }

  /**
   * Create React utilities for error boundaries and component logging
   */
  createReactComponents() {
    const logger = this;
    
    return {
      // Error Boundary component factory (requires React to be available)
      createErrorBoundary: () => {
        // This would need React to be imported/available in the consuming application
        return {
          componentDidCatch: (error: Error, errorInfo: any) => {
            logger.error('React Error Boundary', error, {
              errorInfo,
              componentStack: errorInfo.componentStack
            }, 'React');
          }
        };
      },

      // Hook for component lifecycle logging
      useLogging: (componentName: string) => {
        const componentLogger = logger.child(`React.${componentName}`);
        
        // This would need to be called within a React component with hooks available
        return {
          componentLogger,
          logMount: () => componentLogger.debug('Component mounted'),
          logUnmount: () => componentLogger.debug('Component unmounted'),
          logUpdate: (props?: any) => componentLogger.debug('Component updated', { props })
        };
      }
    };
  }
}

/**
 * A logger instance bound to a specific source
 */
class ComponentLogger {
  constructor(private parent: TkrLogger, private source: string) {}

  debug(message: string, metadata?: LogMetadata): void {
    this.parent.debug(message, metadata, this.source);
  }

  info(message: string, metadata?: LogMetadata): void {
    this.parent.info(message, metadata, this.source);
  }

  warn(message: string, metadata?: LogMetadata): void {
    this.parent.warn(message, metadata, this.source);
  }

  error(message: string, error?: Error, metadata?: LogMetadata): void {
    this.parent.error(message, error, metadata, this.source);
  }

  fatal(message: string, error?: Error, metadata?: LogMetadata): void {
    this.parent.fatal(message, error, metadata, this.source);
  }

  trace(message: string, metadata?: LogMetadata): void {
    this.parent.trace(message, metadata, this.source);
  }
}

/**
 * Factory function to create a logger instance
 */
export function createTkrLogger(config: TkrLoggerConfig): TkrLogger {
  return new TkrLogger(config);
}

/**
 * Factory function to create a logger with auto-capture enabled
 */
export function createAutoTkrLogger(config: TkrLoggerConfig & { autoCapture: AutoCaptureOptions }): TkrLogger {
  return new TkrLogger(config);
}

/**
 * Default export for convenience
 */
export default TkrLogger;