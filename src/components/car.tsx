/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from "react";
import { Button } from "@mui/material";
import { CarData } from "../types/propsTypes";
import { DivBorder, CarDrive, Img } from "./componentsStled";
import { ReactComponent as CarSvg } from "../assets/car.svg";
import finish from "../assets/finish.svg";
import deleteCar from "../controller/deleteCar";
import startStopEngine from "../controller/startStopEngine";
import getSpead from "../helper/getSpead";
import "./animation.css";
import switchEngine from "../controller/switchEngine";

function Car(props: {
  race: boolean;
  car: CarData;
  screenWidth: number;
  setSelectedCar: React.Dispatch<React.SetStateAction<CarData>>;
  selectedCar: CarData;
  setUpdate: () => void;
}) {
  const [carUP, togleUP] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { screenWidth, car, setSelectedCar, selectedCar, setUpdate, race } =
    props;

  const state = useRef({
    status: "stopped",
    spead: "10000ms",
    move: "",
    pause: "running",
  });
  const inRace = useRef(false);
  const { status, spead, move, pause } = state.current;
  async function start() {
    const response = await startStopEngine(car.id, "started");
    const responseSpread = getSpead(response, screenWidth);
    state.current = {
      ...state.current,
      status: "started",
      move: "move",
      spead: responseSpread,
    };
    setUpdate();
    const EnginResponse = await switchEngine(car.id);
    if (!EnginResponse) {
      state.current = {
        status: "started",
        move: "move",
        spead: responseSpread,
        pause: "paused",
      };
      togleUP(true);
    }
  }
  async function stop() {
    await startStopEngine(car.id, "stopped");
    state.current = { ...state.current, status: "stopped", move: "" };
    togleUP(false);
  }
  if (race && !inRace.current) {
    inRace.current = true;
    start();
  }
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
          className="aButton"
          disabled={status !== "stopped"}
          onClick={async () => {
            start();
          }}
          style={{ gridArea: "2 / 1 / 3 / 2" }}
          variant="outlined"
        >
          A
        </Button>
        <Button
          onClick={async () => {
            stop();
          }}
          disabled={status === "stopped"}
          style={{ gridArea: "2 / 2 / 3 / 3" }}
          variant="outlined"
        >
          B
        </Button>
        <span>{car.name}</span>
      </CarDrive>
      <DivBorder>
        <CarSvg
          className="car"
          style={{
            animationName: `${move}`,
            animationDuration: `${spead}`,
            animationPlayState: `${pause}`,
          }}
          width="65px"
          height="30px"
          fill={car.color}
        />
        <Img src={finish} alt="finish" />
      </DivBorder>
    </div>
  );
}

export default Car;
