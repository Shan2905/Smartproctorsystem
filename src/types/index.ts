export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'proctor' | 'student';
  avatar?: string;
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  startTime: Date;
  endTime: Date;
  questions: Question[];
  totalMarks: number;
  status: 'draft' | 'active' | 'completed';
  subjects: string[];
}

export interface Question {
  id: string;
  title: string;
  description: string;
  type: 'mcq' | 'coding' | 'short-answer';
  difficulty: 'easy' | 'medium' | 'hard';
  marks: number;
  options?: string[];
  correctAnswer?: string;
  codeTemplate?: string;
  testCases?: TestCase[];
  subject: 'dsa' | 'cpp' | 'general';
}

export interface TestCase {
  input: string;
  expectedOutput: string;
  isHidden?: boolean;
}

export interface ExamSession {
  id: string;
  examId: string;
  studentId: string;
  startTime: Date;
  endTime?: Date;
  status: 'active' | 'completed' | 'suspended';
  violations: Violation[];
  answers: Answer[];
  score?: number;
}

export interface Violation {
  id: string;
  type: 'tab_switch' | 'face_not_detected' | 'multiple_faces' | 'suspicious_activity';
  timestamp: Date;
  description: string;
  severity: 'low' | 'medium' | 'high';
}

export interface Answer {
  questionId: string;
  answer: string;
  isCorrect?: boolean;
  timeSpent: number;
  codeSubmissions?: CodeSubmission[];
}

export interface CodeSubmission {
  code: string;
  language: string;
  timestamp: Date;
  testResults?: TestResult[];
}

export interface TestResult {
  testCaseId: string;
  passed: boolean;
  executionTime: number;
  memory: number;
  output: string;
}

export interface ProctoringAlert {
  id: string;
  sessionId: string;
  studentName: string;
  type: Violation['type'];
  timestamp: Date;
  severity: Violation['severity'];
  description: string;
}