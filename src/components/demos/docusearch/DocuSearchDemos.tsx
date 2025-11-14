/**
 * DocuSearch Interactive Demos
 *
 * Complete demo suite showcasing DocuSearch UX patterns:
 * 1. Document Card States - Processing states and variants
 * 2. Citation Interaction - Bidirectional highlighting
 * 3. Processing Progress - Stage-by-stage animation
 * 4. Audio Transcript Sync - Media/text synchronization
 */

import DocumentCardDemo from './document-cards/DocumentCardDemo';
import CitationDemo from './citations/CitationDemo';
import ProcessingDemo from './processing/ProcessingDemo';
import AudioTranscriptDemo from './audio-player/AudioTranscriptDemo';

interface DocuSearchDemosProps {
  /** Which demo to show: 'all' | 'cards' | 'citations' | 'processing' | 'audio' */
  demo?: 'all' | 'cards' | 'citations' | 'processing' | 'audio';
}

export default function DocuSearchDemos({ demo = 'all' }: DocuSearchDemosProps) {
  if (demo === 'cards' || demo === 'all') {
    return (
      <>
        {demo === 'all' && <DocumentCardDemo />}
        {demo === 'all' && <CitationDemo />}
        {demo === 'all' && <AudioTranscriptDemo />}
        {demo === 'cards' && <DocumentCardDemo />}
      </>
    );
  }

  if (demo === 'citations') {
    return <CitationDemo />;
  }

  if (demo === 'processing') {
    return <ProcessingDemo />;
  }

  if (demo === 'audio') {
    return <AudioTranscriptDemo />;
  }

  return (
    <>
      <DocumentCardDemo />
      <CitationDemo />
      <AudioTranscriptDemo />
    </>
  );
}

// Export individual demos for flexible usage
export { DocumentCardDemo, CitationDemo, ProcessingDemo, AudioTranscriptDemo };
