export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'teacher' | 'developer';
  grade?: number;
  class?: string;
  xp?: number;
  avatar?: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  units: Unit[];
}

export interface Unit {
  id: string;
  name: string;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  name: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  name: string;
  content: string;
  hasGame: boolean;
  gameType?: 'motion' | 'algebra';
  completed: boolean;
  xpReward: number;
}

export interface Progress {
  studentId: string;
  subjectId: string;
  unitId: string;
  chapterId: string;
  lessonId: string;
  completed: boolean;
  xpEarned: number;
  lastAccessed: Date;
}

export interface LeaderboardEntry {
  studentId: string;
  name: string;
  xp: number;
  rank: number;
  avatar?: string;
}

export interface Mail {
  id: string;
  from: string;
  to: string;
  subject: string;
  content: string;
  type: 'scholarship' | 'general';
  companyName?: string;
  scholarshipCriteria?: string;
  hasApplyButton?: boolean;
  timestamp: Date;
  read: boolean;
}

export type Language = 'en' | 'hi' | 'od';

export interface GameScore {
  score: number;
  xp: number;
  completed: boolean;
}