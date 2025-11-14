interface ProcessingInfoProps {
  stage?: string;
  progress?: number;
}

function LoadingSpinner() {
  return <div className="document-card__spinner" />;
}

export default function ProcessingInfo({ stage, progress }: ProcessingInfoProps) {
  return (
    <div className="document-card__processing-info">
      <div className="document-card__status">
        <LoadingSpinner />
        <div className="document-card__status-label">{stage || 'Processing...'}</div>
      </div>
      {progress !== undefined && (
        <div className="document-card__progress-container">
          <div
            className="document-card__progress"
            role="progressbar"
            aria-valuenow={Math.round(progress * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="document-card__progress-bar" style={{ width: `${progress * 100}%` }} />
          </div>
          <div className="document-card__progress-text">{Math.round(progress * 100)}%</div>
        </div>
      )}
    </div>
  );
}
