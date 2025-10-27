export interface HealthMetrics {
  id: string;
  date: string;
  steps: number;
  sleepHours: number;
  heartRate: number;
  calories: number;
  waterIntake: number;
}

export interface PredictionResult {
  metric: string;
  predictions: Array<{
    date: string;
    value: number;
    confidence: number;
  }>;
}

export interface HealthAdvice {
  category: string;
  message: string;
  priority: 'low' | 'medium' | 'high';
}
