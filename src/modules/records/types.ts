export type RecordType = "LAB_REPORT" | "PRESCRIPTION" | "CONSULTATION" | "VACCINATION" | "ALLERGY";

export type AttachmentType = "IMAGE" | "PDF";

export interface Attachment {
  id: string;
  type: AttachmentType;
  url: string;
  thumbnail: string;
}

export interface HealthRecord {
  id: string;
  type: RecordType;
  title: string;
  description: string;
  tags: string[];
  date: string;
  attachments: Attachment[];
}
