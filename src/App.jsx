import { useEffect, useState } from "react";

import Loading from "./components/Loading";
import { Card } from "./components/Card";

export const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const resp = await fetch(`${process.env.REACT_APP_API}/weather`, {
        headers: {
          secretKey: process.env.REACT_APP_SECRET_KEY,
        },
      });

      if (resp.status === 401) {
        return alert("Api key incorrecta");
      }
      const { data } = await resp.json();

      if (data) {
        setData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (data.length > 0) {
    return (
      <div className="grid">
        {data.map((weatherCity) => {
          return <Card key={weatherCity.name} weatherCity={weatherCity} />;
        })}
      </div>
    );
  }
  return <Loading />;
};

export default App;
