import { formatDate } from '../shared/mockData';

const FILE_TYPE_ICONS: Record<string, JSX.Element> = {
  document: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  ),
  audio: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  ),
};

interface DocumentBadgeProps {
  filename: string;
  uploadDate: string;
  status?: 'completed' | 'uploading' | 'processing' | 'failed';
}

export default function DocumentBadge({ filename, uploadDate, status }: DocumentBadgeProps) {
  const extension = filename.split('.').pop()?.toLowerCase() || '';
  const iconType = ['mp3', 'wav', 'mp4'].includes(extension) ? 'audio' : 'document';
  const icon = FILE_TYPE_ICONS[iconType];

  return (
    <div className="document-card__badge" aria-label={`Added ${formatDate(uploadDate)}, File type: ${extension.toUpperCase()}`}>
      <div className="document-card__badge-filetype">
        <div className="document-card__badge-icon-container">
          <div className="document-card__badge-icon">{icon}</div>
          <div className="document-card__badge-extension">{extension.toUpperCase()}</div>
        </div>
      </div>
      <div className="document-card__badge-date">
        <span style={{ textDecoration: status === 'failed' ? 'line-through' : 'none' }}>Added</span>
        <br />
        {formatDate(uploadDate)}
      </div>
    </div>
  );
}
