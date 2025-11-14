import { useState, useRef, useEffect } from 'react';
import { mockAnswerText, mockReferences } from '../shared/mockData';
import type { Reference } from '../shared/types';
import '../shared/docusearch-demo.css';

function CitationLink({
  number,
  isActive,
  onClick,
  onHover,
}: {
  number: number;
  isActive: boolean;
  onClick: () => void;
  onHover: (hover: boolean) => void;
}) {
  return (
    <button
      type="button"
      className={`citation-link ${isActive ? 'citation-link--active' : ''}`}
      onClick={onClick}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      aria-label={`Citation ${number}`}
    >
      [{number}]
    </button>
  );
}

function ReferenceCard({
  reference,
  isHighlighted,
  onHover,
}: {
  reference: Reference;
  isHighlighted: boolean;
  onHover: (hover: boolean) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      id={`reference-${reference.id}`}
      className={`reference-card ${isHighlighted ? 'reference-card--highlighted' : ''}`}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className="reference-card__number">{reference.id}</div>
      <div className="reference-card__content">
        <h4 className="reference-card__title">{reference.document_name}</h4>
        <p className="reference-card__excerpt">{reference.excerpt}</p>
        {reference.page && <div className="reference-card__meta">Page {reference.page}</div>}
      </div>
    </div>
  );
}

export default function CitationDemo() {
  const [activeCitation, setActiveCitation] = useState<number | null>(null);
  const [hoveredCitation, setHoveredCitation] = useState<number | null>(null);
  const [hoveredReference, setHoveredReference] = useState<number | null>(null);

  // Auto-clear active citation after 3 seconds
  useEffect(() => {
    if (activeCitation !== null) {
      const timer = setTimeout(() => setActiveCitation(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [activeCitation]);

  const handleCitationClick = (num: number) => {
    setActiveCitation(num);
    // Scroll to reference
    const element = document.getElementById(`reference-${num}`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const handleCitationHover = (num: number, hover: boolean) => {
    setHoveredCitation(hover ? num : null);
  };

  const handleReferenceHover = (num: number, hover: boolean) => {
    setHoveredReference(hover ? num : null);
  };

  // Render answer text with inline citations
  const renderAnswerWithCitations = () => {
    const parts = mockAnswerText.split(/(\[\d+\])/g);
    return parts.map((part, index) => {
      const match = part.match(/\[(\d+)\]/);
      if (match) {
        const num = parseInt(match[1]);
        const isActive = activeCitation === num || hoveredReference === num;
        return (
          <CitationLink
            key={index}
            number={num}
            isActive={isActive}
            onClick={() => handleCitationClick(num)}
            onHover={(hover) => handleCitationHover(num, hover)}
          />
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="docusearch-demo">
      <div className="docusearch-demo__wrapper">
        <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--foreground)' }}>
          Citation Interaction Demo
        </h3>
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--muted-foreground)' }}>
          Click citations to scroll to references • Hover to preview
        </p>

        <div className="citation-two-col">
          <div>
            <div className="answer-text" style={{ marginBottom: 0 }}>{renderAnswerWithCitations()}</div>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem', color: 'var(--foreground)' }}>References</h4>
            <div className="references-list">
              {mockReferences.map((ref) => (
                <ReferenceCard
                  key={ref.id}
                  reference={ref}
                  isHighlighted={
                    hoveredCitation === ref.id || activeCitation === ref.id || hoveredReference === ref.id
                  }
                  onHover={(hover) => handleReferenceHover(ref.id, hover)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
