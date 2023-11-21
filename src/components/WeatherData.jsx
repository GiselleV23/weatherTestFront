import iconoTemp from "../assets/icons/temp.png";
import iconoHumidity from "../assets/icons/humidity.png";
import iconoWind from "../assets/icons/wind.png";

import WeatherItem from "./WeatherItem";
import { convertKelvinToCelcius } from "../helpers/functions";

const WeatherData = ({ data }) => {
  const weatherItems = [
    {
      icono: iconoTemp,
      texto: "Temperatura",
      valor: convertKelvinToCelcius(data.main.temp),
    },
    {
      icono: iconoHumidity,
      texto: "Humedad",
      valor: data.main.humidity,
    },
    {
      icono: iconoWind,
      texto: "Velocidad del viento",
      valor: data.wind.speed,
    },
  ];

  return (
    <div className="clima-datos">
      {weatherItems.map((item) => {
        return (
          <WeatherItem
            key={item.texto}
            icono={item.icono}
            texto={item.texto}
            valor={item.valor}
          />
        );
      })}
    </div>
  );
};

export default WeatherData;
