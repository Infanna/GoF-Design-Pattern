import { WeatherData } from "./weatherData";

export interface WeatherObserver {
    update(data: WeatherData): void;
}