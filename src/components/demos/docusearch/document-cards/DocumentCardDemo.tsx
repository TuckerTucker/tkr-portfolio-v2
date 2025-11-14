import DocumentCard from './DocumentCard';
import { mockDocuments } from '../shared/mockData';
import '../shared/docusearch-demo.css';

export default function DocumentCardDemo() {
  return (
    <div className="docusearch-demo">
      <div className="docusearch-demo__wrapper">
        <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--foreground)' }}>
          Document Card States
        </h3>
        <div className="docusearch-demo__grid">
          <div>
            <DocumentCard document={mockDocuments.processing} />
            <div className="docusearch-demo__label">Processing (67% complete)</div>
          </div>

          <div>
            <DocumentCard document={mockDocuments.completed} />
            <div className="docusearch-demo__label">Completed - Document</div>
          </div>

          <div>
            <DocumentCard document={mockDocuments.failed} />
            <div className="docusearch-demo__label">Failed Upload</div>
          </div>

          <div>
            <DocumentCard document={mockDocuments.audioCompleted} />
            <div className="docusearch-demo__label">Completed - Audio</div>
          </div>
        </div>
      </div>
    </div>
  );
}
