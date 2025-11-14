import { useState, useEffect, useRef } from 'react';
import { mockTranscript, formatDuration, mockDocuments } from '../shared/mockData';
import '../shared/docusearch-demo.css';

export default function AudioTranscriptDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activeSegment, setActiveSegment] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const audioDoc = mockDocuments.audioCompleted;

  // Set up audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      console.log('Audio ref is null');
      return;
    }

    console.log('Setting up audio listeners. Audio src:', audio.src);

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      console.log('Audio metadata loaded. Duration:', audio.duration);
      setDuration(audio.duration);
    };

    const handlePlay = () => {
      console.log('Audio started playing');
      setIsPlaying(true);
    };

    const handlePause = () => {
      console.log('Audio paused');
      setIsPlaying(false);
    };

    const handleEnded = () => {
      console.log('Audio ended');
      setIsPlaying(false);
      audio.currentTime = 0;
    };

    const handleError = (e: Event) => {
      console.error('Audio error:', e, audio.error);
    };

    const handleCanPlay = () => {
      console.log('Audio can play. Ready state:', audio.readyState);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  // Update active segment based on current time
  useEffect(() => {
    const segment = mockTranscript.find(
      (seg) => currentTime >= seg.start_time && currentTime < seg.end_time
    );
    setActiveSegment(segment?.id || null);
  }, [currentTime]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) {
      console.log('Audio ref is null in handlePlayPause');
      return;
    }

    console.log('Play/Pause clicked. Current state:', { isPlaying, currentTime, duration, readyState: audio.readyState });

    if (isPlaying) {
      console.log('Pausing audio');
      audio.pause();
    } else {
      console.log('Attempting to play audio');
      audio.play().catch((error) => {
        console.error('Error playing audio:', error);
      });
    }
  };

  const handleSeek = (time: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = time;
    if (!isPlaying) {
      audio.play().catch((error) => {
        console.error('Error playing audio:', error);
      });
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = percentage * duration;
    handleSeek(newTime);
  };

  return (
    <div className="docusearch-demo">
      <div className="docusearch-demo__wrapper">
        <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--foreground)' }}>
          Audio Player with Transcript
        </h3>
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--muted-foreground)' }}>
          Click transcript segments to seek • Active segment highlights during playback
        </p>

        {/* Hidden audio element */}
        <audio ref={audioRef} src="/demos/docusearch/audio/creative_myth_1.mp3" preload="metadata" />

        <div className="citation-two-col">
          {/* Left Column: Audio Player */}
          <div>
            <div
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-4)',
              }}
            >
              {/* Album Art */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  marginBottom: 'var(--space-4)',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  background: 'var(--muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={audioDoc.cover_art_url}
                  alt="Album art"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Title */}
              <h4 style={{ margin: '0 0 var(--space-2) 0', color: 'var(--foreground)', fontSize: 'var(--font-size-lg)' }}>
                Creative Myth 1
              </h4>
              <p style={{ margin: '0 0 var(--space-4) 0', color: 'var(--muted-foreground)', fontSize: 'var(--font-size-sm)' }}>
                {duration > 0 ? formatDuration(duration) : '--:--'}
              </p>

              {/* Player Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                <button
                  onClick={handlePlayPause}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    border: 'none',
                    background: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  )}
                </button>
                <div style={{ flex: 1 }}>
                  <div
                    onClick={handleProgressClick}
                    style={{
                      height: '8px',
                      background: 'var(--border)',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        background: 'var(--primary)',
                        width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`,
                        transition: 'width 0.1s linear',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--muted-foreground)',
                      marginTop: 'var(--space-1)',
                    }}
                  >
                    <span>{formatDuration(currentTime)}</span>
                    <span>{duration > 0 ? formatDuration(duration) : '--:--'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Transcript/Captions */}
          <div>
            <div
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-4)',
                maxHeight: '593px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h4 style={{ margin: '0 0 var(--space-4) 0', color: 'var(--foreground)' }}>Transcript</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', overflowY: 'auto', flex: 1 }}>
                {mockTranscript.map((segment) => (
                  <div
                    key={segment.id}
                    onClick={() => handleSeek(segment.start_time)}
                    style={{
                      padding: 'var(--space-3)',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)',
                      background: activeSegment === segment.id ? 'oklch(from var(--primary) l c h / 0.1)' : 'transparent',
                      border: activeSegment === segment.id ? '1px solid var(--primary)' : '1px solid transparent',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSegment !== segment.id) {
                        e.currentTarget.style.background = 'var(--muted)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeSegment !== segment.id) {
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    <div
                      style={{
                        fontSize: 'var(--font-size-xs)',
                        color: 'var(--muted-foreground)',
                        marginBottom: 'var(--space-1)',
                        fontWeight: activeSegment === segment.id ? 600 : 400,
                      }}
                    >
                      {formatDuration(segment.start_time)}
                    </div>
                    <div
                      style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--foreground)',
                        lineHeight: 1.6,
                      }}
                    >
                      {segment.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
