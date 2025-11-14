/**
 * TypeScript interfaces for DocuSearch demos
 */

export type DocumentStatus = 'uploading' | 'processing' | 'completed' | 'failed';
export type DocumentVariant = 'document' | 'audio';

export interface Document {
  doc_id: string;
  filename: string;
  file_type: string;
  upload_date: string;
  thumbnail_url?: string;
  cover_art_url?: string;
  status: DocumentStatus;
  error_message?: string;
  processing_stage?: string;
  processing_progress?: number; // 0-1
}

export interface Citation {
  id: number;
  text: string;
  page?: number;
  timestamp?: string;
}

export interface Reference {
  id: number;
  document_id: string;
  document_name: string;
  excerpt: string;
  page?: number;
  timestamp?: string;
}

export interface TranscriptSegment {
  id: string;
  start_time: number; // seconds
  end_time: number;
  text: string;
}
