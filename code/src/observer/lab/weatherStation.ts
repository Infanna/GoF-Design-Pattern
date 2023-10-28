import { WeatherObserver } from 'observer/begin/weatherObserver';
import { WeatherData } from './weatherData';

export class WeatherStation {
  observers: WeatherObserver[] = [];

  public registerObserver(observer: WeatherObserver): void {
    this.observers.push(observer);
  }

  private data = new WeatherData(0, 0, 0);

  public update(data: WeatherData): void {
    this.data = data;
    this.observers.forEach((observer) => observer.update(data))
  }

  updateCurrentConditionsDisplay(): string {
    return `Current conditions: ${this.data.temperature}C degrees and ${this.data.humidity}% humidity`;
  }

  updateStatisticsDisplay(): string {
    return `Avg/Max/Min temperature = ${this.data.temperature}/${this.data.humidity}/${this.data.pressure}`;
  }

  updateForecastDisplay(): string {
    return `Forecast: More of the same`;
  }
}
