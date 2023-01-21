/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { CarData } from "../types/propsTypes";
import { DivBorder, CarDrive, Img } from "./componentsStled";
import { ReactComponent as CarSvg } from "../assets/car.svg";
import finish from "../assets/finish.svg";
import deleteCar from "../controller/deleteCar";
import startStopEngine from "../controller/startStopEngine";
import getSpead from "../helper/getSpead";

function Car(props: {
  car: CarData;
  screenWidth: number;
  setSelectedCar: React.Dispatch<React.SetStateAction<CarData>>;
  selectedCar: CarData;
  setUpdate: () => void;
}) {
  const { screenWidth, car, setSelectedCar, selectedCar, setUpdate } = props;
  const [status, setStatus] = useState("started");
  const [spead, setSpead] = useState(0);
  console.log(spead);
  const [position, setPosition] = useState(0);

  return (
    <div>
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
        <Button
          onClick={async () => {
            const response = await startStopEngine(car.id, status);
            setStatus("stopped");
            setSpead(getSpead(response, screenWidth));
          }}
          style={{ gridArea: "2 / 1 / 3 / 2" }}
          variant="outlined"
        >
          A
        </Button>
        <Button
          onClick={() => setStatus("started")}
          disabled={status !== "stopped"}
          style={{ gridArea: "2 / 2 / 3 / 3" }}
          variant="outlined"
        >
          B
        </Button>
        <span>{car.name}</span>
      </CarDrive>
      <DivBorder>
        <CarSvg
          width="65px"
          height="30px"
          fill={car.color}
          style={{ position: "relative", left: `${position}px` }}
        />
        <Img src={finish} alt="finish" />
      </DivBorder>
    </div>
  );
}

export default Car;
