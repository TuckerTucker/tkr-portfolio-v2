import { useState, useEffect } from 'react';
import { processingStages } from '../shared/mockData';
import '../shared/docusearch-demo.css';

function LoadingSpinner() {
  return <div className="document-card__spinner" />;
}

export default function ProcessingDemo() {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setCurrentStageIndex((prev) => {
        if (prev >= processingStages.length - 1) {
          // Loop back to start after completion
          setTimeout(() => setCurrentStageIndex(0), 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 1500); // Change stage every 1.5 seconds

    return () => clearInterval(timer);
  }, [isRunning]);

  const currentStage = processingStages[currentStageIndex];
  const isComplete = currentStageIndex === processingStages.length - 1;

  return (
    <div className="docusearch-demo">
      <div className="docusearch-demo__wrapper">
        <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--foreground)' }}>
          Processing Progress Animation
        </h3>

        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div className="document-card__processing-info">
            <div className="document-card__status">
              {!isComplete && <LoadingSpinner />}
              {isComplete && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: 'var(--success)' }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
              <div className="document-card__status-label" style={{ color: isComplete ? 'var(--success)' : undefined }}>
                {currentStage.stage}
              </div>
            </div>
            {currentStage.progress < 1 && (
              <div className="document-card__progress-container">
                <div className="document-card__progress" role="progressbar" aria-valuenow={Math.round(currentStage.progress * 100)} aria-valuemin={0} aria-valuemax={100}>
                  <div
                    className="document-card__progress-bar"
                    style={{ width: `${currentStage.progress * 100}%` }}
                  />
                </div>
                <div className="document-card__progress-text">{Math.round(currentStage.progress * 100)}%</div>
              </div>
            )}
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="document-card__button"
              style={{ margin: '0 auto' }}
            >
              {isRunning ? 'Pause' : 'Resume'}
            </button>
          </div>

          <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>
            Stage {currentStageIndex + 1} of {processingStages.length}
          </div>
        </div>
      </div>
    </div>
  );
}
