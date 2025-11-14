import type { DocumentVariant, DocumentStatus } from '../shared/types';

const DOCUMENT_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

interface DocumentThumbnailProps {
  url?: string;
  filename: string;
  variant: DocumentVariant;
  status: DocumentStatus;
}

export default function DocumentThumbnail({ url, filename, status }: DocumentThumbnailProps) {
  // Loading or processing states
  if (status === 'uploading' || status === 'processing') {
    return (
      <div className="document-card__thumbnail document-card__thumbnail--placeholder document-card__thumbnail--loading">
        <div className="document-card__thumbnail-icon">{DOCUMENT_ICON}</div>
      </div>
    );
  }

  // Completed with thumbnail
  if (url && status === 'completed') {
    return (
      <img
        src={url}
        alt={`Thumbnail for ${filename}`}
        className="document-card__thumbnail"
        loading="lazy"
      />
    );
  }

  // Fallback placeholder
  return (
    <div className="document-card__thumbnail document-card__thumbnail--placeholder">
      <div className="document-card__thumbnail-icon">{DOCUMENT_ICON}</div>
    </div>
  );
}
