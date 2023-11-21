import { convertKelvinToCelcius, getCurrentDate } from "../helpers/functions";

export const Weather = ({ ciudad, temp, clima }) => {
  return (
    <div className="clima">
      <h2 className="ciudad">{ciudad.toUpperCase()}</h2>
      <p className="fecha">{getCurrentDate()}</p>
      <p className="temperatura">{convertKelvinToCelcius(temp)}&deg;</p>
      <div className="clima-estado">
        <p>
          <span className="negrilla">Clima</span> / <span>{clima}</span>
        </p>
      </div>
    </div>
  );
};
export default Weather;
