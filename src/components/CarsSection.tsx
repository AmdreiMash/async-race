import React from "react";
import { CarData } from "../types/propsTypes";
import Car from "./car";

function CarsSection(props: {
  race: boolean;
  data: CarData[];
  setSelectedCar: React.Dispatch<React.SetStateAction<CarData>>;
  selectedCar: CarData;
  setUpdate: () => void;
}) {
  const { data, selectedCar, setUpdate, setSelectedCar, race } = props;
  const screenWidth = window.screen.width - 85;
  const cars =
    data.length > 0 ? (
      data.map((car: CarData) => (
        <Car
          race={race}
          screenWidth={screenWidth}
          key={car.id}
          car={car}
          selectedCar={selectedCar}
          setUpdate={setUpdate}
          setSelectedCar={setSelectedCar}
        />
      ))
    ) : (
      <div>
        <p>Empty...</p>
      </div>
    );
  return <section>{cars}</section>;
}

export default CarsSection;
