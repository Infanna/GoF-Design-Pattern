import { WeatherData } from "./weatherData";
import { WeatherObserver } from "./weatherObserver";

export class ConditionDisplay implements WeatherObserver {
    private data: WeatherData | undefined;

    update(data: WeatherData): void {
        this.data = data
    }

    display(): string{
        if(!this.data){
            throw new Error('No data');
        }
        return `Current conditions: ${this.data.temperature}C degrees and ${this.data.humidity}% humidity`;
    }
}