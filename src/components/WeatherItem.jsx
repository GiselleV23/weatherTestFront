const WeatherItem = ({ icono, texto, valor }) => {
  return (
    <div className="items">
      <div className="item-contenedor">
        <img
          src={icono}
          className="inconos"
          width="32px"
          height="32px"
          alt="temp-icon"
        />
        <p>{texto}</p>
      </div>

      <p>{valor}</p>
    </div>
  );
};

export default WeatherItem;
