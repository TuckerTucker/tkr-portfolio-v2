import type { Document, DocumentVariant } from '../shared/types';
import { getDisplayName } from '../shared/mockData';
import DocumentBadge from './DocumentBadge';
import DocumentThumbnail from './DocumentThumbnail';
import ProcessingInfo from './ProcessingInfo';
import ErrorInfo from './ErrorInfo';

interface DocumentCardProps {
  document: Document;
}

export default function DocumentCard({ document }: DocumentCardProps) {
  const {
    doc_id,
    filename,
    upload_date,
    status,
    error_message,
    processing_stage,
    processing_progress,
    thumbnail_url,
    cover_art_url,
    file_type,
  } = document;

  // Determine variant
  const audioTypes = ['mp3', 'wav', 'mp4', 'avi', 'mov', 'webm'];
  const variant: DocumentVariant = audioTypes.includes(file_type) ? 'audio' : 'document';

  // Build class names
  const cardClasses = [
    'document-card',
    `document-card--${variant}`,
    status !== 'completed' && `document-card--${status}`,
  ]
    .filter(Boolean)
    .join(' ');

  const displayName = getDisplayName(filename);
  const thumbnailSrc = cover_art_url || thumbnail_url;

  return (
    <article className={cardClasses} role="article" aria-label={`Document: ${filename}`}>
      <div className="document-card__left">
        <DocumentThumbnail url={thumbnailSrc} filename={filename} variant={variant} status={status} />
        <DocumentBadge filename={filename} uploadDate={upload_date} status={status} />
      </div>

      <div className="document-card__right">
        {status === 'completed' && <h3 className="document-card__title">{displayName}</h3>}

        {status === 'uploading' && (
          <>
            <ProcessingInfo stage={processing_stage || 'Uploading...'} progress={processing_progress} />
            <button className="document-card__button" disabled>
              Details
            </button>
          </>
        )}

        {status === 'processing' && (
          <>
            <ProcessingInfo stage={processing_stage} progress={processing_progress} />
            <button className="document-card__button" disabled>
              Details
            </button>
          </>
        )}

        {status === 'failed' && (
          <>
            <ErrorInfo message={error_message} />
            <button className="document-card__button" disabled>
              Retry
            </button>
          </>
        )}

        {status === 'completed' && (
          <button className="document-card__button" onClick={() => console.log('View details:', doc_id)}>
            Details
          </button>
        )}
      </div>
    </article>
  );
}
