import { Button } from "@mui/material";
import React from "react";
import { ReactComponent as CarSvg } from "../assets/car.svg";
import finish from "../assets/finish.svg";
import deleteCar from "../controller/deleteCar";
import { CarData } from "../types/propsTypes";
import { DivBorder, CarDrive, Img } from "./componentsStled";

function CarsSection(props: {
  data: CarData[];
  setSelectedCar: React.Dispatch<React.SetStateAction<CarData>>;
  selectedCar: CarData;
  setUpdate: () => void;
}) {
  const { setSelectedCar } = props;
  const { data, selectedCar, setUpdate } = props;
  const cars =
    data.length > 0 ? (
      data.map((car: CarData) => (
        <div key={car.id}>
          <CarDrive>
            <Button
              onClick={() => {
                setSelectedCar(car);
              }}
              style={{ gridArea: "1 / 1 / 2 / 3" }}
              variant="contained"
              color={selectedCar.id === car.id ? "success" : "primary"}
            >
              Select
            </Button>
            <Button
              style={{ gridArea: "1 / 3 / 2 / 5" }}
              variant="contained"
              onClick={() => {
                deleteCar(car.id);
                setUpdate();
              }}
            >
              Remove
            </Button>
            <Button style={{ gridArea: "2 / 1 / 3 / 2" }} variant="outlined">
              A
            </Button>
            <Button style={{ gridArea: "2 / 2 / 3 / 3" }} variant="outlined">
              B
            </Button>
            <span>{car.name}</span>
          </CarDrive>
          <DivBorder>
            <CarSvg width="65px" height="30px" fill={car.color} />
            <Img src={finish} alt="finish" />
          </DivBorder>
        </div>
      ))
    ) : (
      <div>
        <p>Garage is loding...</p>
      </div>
    );

  return <section>{cars}</section>;
}

export default CarsSection;
