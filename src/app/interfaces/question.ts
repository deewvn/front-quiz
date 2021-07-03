export interface Question {
  id: number;
  value: string;
  options: Option[];
  answer: string;
  selectedOption: string;
}

export interface Option {
  optionValue: string;
  optionText: string;
}

export interface QuestionField {
  id: number;
  title: string;
}
