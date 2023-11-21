import Weather from "./Weather";
import WeatherData from "./WeatherData";

export const Card = ({ weatherCity }) => {
  return (
    <div className="contenedor">
      <Weather
        ciudad={weatherCity.name}
        temp={weatherCity.main.temp}
        clima={weatherCity.weather[0].main}
      />
      <WeatherData data={weatherCity} />
    </div>
  );
};
