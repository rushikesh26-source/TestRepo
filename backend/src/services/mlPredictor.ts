import { HealthMetrics, PredictionResult } from '../models/HealthData';

export class MLPredictor {
  /**
   * Simple linear regression implementation for health trend prediction
   */
  private linearRegression(data: number[]): { slope: number; intercept: number } {
    const n = data.length;
    if (n === 0) return { slope: 0, intercept: 0 };

    const xValues = Array.from({ length: n }, (_, i) => i);
    const yValues = data;

    const sumX = xValues.reduce((a, b) => a + b, 0);
    const sumY = yValues.reduce((a, b) => a + b, 0);
    const sumXY = xValues.reduce((sum, x, i) => sum + x * yValues[i], 0);
    const sumXX = xValues.reduce((sum, x) => sum + x * x, 0);

    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    return { slope, intercept };
  }

  /**
   * Calculate standard deviation for confidence intervals
   */
  private calculateStdDev(data: number[]): number {
    const mean = data.reduce((a, b) => a + b, 0) / data.length;
    const variance = data.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / data.length;
    return Math.sqrt(variance);
  }

  /**
   * Predict future values for a specific metric
   */
  private predictMetric(
    historicalData: number[],
    metricName: string,
    daysToPredict: number = 7
  ): PredictionResult {
    const { slope, intercept } = this.linearRegression(historicalData);
    const stdDev = this.calculateStdDev(historicalData);
    const n = historicalData.length;

    const predictions = [];
    const today = new Date();

    for (let i = 1; i <= daysToPredict; i++) {
      const predictedValue = slope * (n + i) + intercept;
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + i);

      // Calculate confidence (decreases with distance from known data)
      const confidence = Math.max(0.5, 1 - (i * 0.05));

      predictions.push({
        date: futureDate.toISOString().split('T')[0],
        value: Math.max(0, Math.round(predictedValue)),
        confidence: Math.round(confidence * 100) / 100,
      });
    }

    return {
      metric: metricName,
      predictions,
    };
  }

  /**
   * Generate predictions for all health metrics
   */
  public predictHealthTrends(healthData: HealthMetrics[]): PredictionResult[] {
    if (healthData.length === 0) {
      return [];
    }

    // Sort by date
    const sortedData = [...healthData].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    // Extract metric arrays
    const steps = sortedData.map((d) => d.steps);
    const sleepHours = sortedData.map((d) => d.sleepHours);
    const heartRate = sortedData.map((d) => d.heartRate);
    const calories = sortedData.map((d) => d.calories);
    const waterIntake = sortedData.map((d) => d.waterIntake);

    return [
      this.predictMetric(steps, 'steps'),
      this.predictMetric(sleepHours, 'sleepHours'),
      this.predictMetric(heartRate, 'heartRate'),
      this.predictMetric(calories, 'calories'),
      this.predictMetric(waterIntake, 'waterIntake'),
    ];
  }

  /**
   * Calculate weekly averages
   */
  public calculateWeeklyAverages(healthData: HealthMetrics[]): {
    avgSteps: number;
    avgSleep: number;
    avgHeartRate: number;
    avgCalories: number;
    avgWater: number;
  } {
    if (healthData.length === 0) {
      return {
        avgSteps: 0,
        avgSleep: 0,
        avgHeartRate: 0,
        avgCalories: 0,
        avgWater: 0,
      };
    }

    const sum = healthData.reduce(
      (acc, data) => ({
        steps: acc.steps + data.steps,
        sleep: acc.sleep + data.sleepHours,
        heartRate: acc.heartRate + data.heartRate,
        calories: acc.calories + data.calories,
        water: acc.water + data.waterIntake,
      }),
      { steps: 0, sleep: 0, heartRate: 0, calories: 0, water: 0 }
    );

    const count = healthData.length;

    return {
      avgSteps: Math.round(sum.steps / count),
      avgSleep: Math.round((sum.sleep / count) * 10) / 10,
      avgHeartRate: Math.round(sum.heartRate / count),
      avgCalories: Math.round(sum.calories / count),
      avgWater: Math.round((sum.water / count) * 10) / 10,
    };
  }
}
