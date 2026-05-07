
export type QuestionType = 'single' | 'multi' | 'slider';

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  category: string; // Used for the progress bar labels like "Concerns", "Risk", etc.
  options?: string[]; // Only for single and multi type
  min?: number; // Only for slider type
  max?: number; // Only for slider type
  description?: string; // Optional sub-text
}

export interface AssessmentAnswers {
  [questionId: string]: string | string[] | number;
}
