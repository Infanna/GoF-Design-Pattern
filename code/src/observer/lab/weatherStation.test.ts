import { ConditionDisplay } from './conditionDIsplay';
import { ForecastDisplay, StatisticsDisplay } from './statisticDisplay';
import { WeatherData } from './weatherData';
import { WeatherStation } from './weatherStation';

describe('[Observer - lab] Weather station measurement changed', () => {
  it('display should be called when measurement changed', () => {
    // given
    const weatherStation = new WeatherStation();
    const data = new WeatherData(32.0, 0.8, 1.0);

    // when
    weatherStation.update(data);

    // then
    expect(weatherStation.updateCurrentConditionsDisplay()).toBe(
      'Current conditions: 32C degrees and 0.8% humidity'
    );
    expect(weatherStation.updateStatisticsDisplay()).toBe(
      'Avg/Max/Min temperature = 32/0.8/1'
    );
    expect(weatherStation.updateForecastDisplay()).toBe(
      'Forecast: More of the same'
    );
  });

  it('should display condition when weather station data changed', () => {
    const weatherStation = new WeatherStation();
    const data = new WeatherData(32.0, 0.8, 1.0);

    const observer1 = new ConditionDisplay();
    const observer2 = new StatisticsDisplay();
    const observer3 = new ForecastDisplay();

    weatherStation.registerObserver(observer1);
    weatherStation.registerObserver(observer2);
    weatherStation.registerObserver(observer3);

    weatherStation.update(data);

    expect(observer1.display()).toBe('Current conditions: 32C degrees and 0.8% humidity');
    expect(observer2.display()).toBe('Avg/Max/Min temperature = 32/0.8/1');
    expect(observer3.display()).toBe('Forecast: More of the same');
  })
});
