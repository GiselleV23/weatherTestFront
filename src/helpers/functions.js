export const getCurrentDate = () => {
  const fecha = new Date();
  const options = { dateStyle: "long" };
  const date = fecha.toLocaleString("es", options);
  return date;
};

export const convertKelvinToCelcius = (kelvin) => {
  const parsedKelvin = parseFloat(kelvin);

  const celcius = parsedKelvin - 273.15;

  return celcius;
};
