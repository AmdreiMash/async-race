/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import Options from "../components/Options";
import CarsSection from "../components/CarsSection";
import Links from "../components/links";
import { CarData } from "../types/propsTypes";
import getGarageData from "../controller/getGatageData";

function Garage() {
  const [update, setUpdate] = useState(true);
  const [cars, setCars] = useState([] as CarData[]);
  const [selectedCar, setSelectedCar] = useState({} as CarData);

  useEffect(() => {
    if (update) {
      getGarageData().then((data: CarData[]) => setCars(data));
      setUpdate(false);
    }
  }, [update]);

  return (
    <main style={{ marginTop: "30px" }}>
      <Links />
      <Options
        selectedCar={selectedCar}
        setUpdate={() => setUpdate(true)}
        setSelectedCar={setSelectedCar}
      />
      <div style={{ marginTop: "30px" }}>
        <h1>Garage(num)</h1>
        <h2>Page(num)</h2>
        <CarsSection
          data={cars}
          setSelectedCar={setSelectedCar}
          selectedCar={selectedCar}
          setUpdate={() => setUpdate(true)}
        />
      </div>
    </main>
  );
}

export default Garage;
