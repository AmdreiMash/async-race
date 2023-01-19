import { Input, Button } from "@mui/material";
import _ from "lodash";
import React, { useState } from "react";
import addCar from "../controller/addCar";
import { CarData } from "../types/propsTypes";
import { DivCol, Form } from "./componentsStled";
import updateCar from "../controller/updateCar";
import addOHCars from "../helper/addOHCars";
//! добавить функию изменения текущей мащины
function Options(props: {
  setUpdate: () => void;
  selectedCar: CarData;
  setSelectedCar: React.Dispatch<React.SetStateAction<CarData>>;
}) {
  const [newCar, setNewCar] = useState({ color: "#000000", name: "" });
  const newCarValid = newCar.name === "";
  const { setUpdate, selectedCar, setSelectedCar } = props;
  return (
    <DivCol>
      <Form>
        <Input
          id="createCar"
          aria-describedby="my-helper-text"
          placeholder="Name"
          value={newCar.name}
          onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
        />
        <input
          type="color"
          onChange={(e) => setNewCar({ ...newCar, color: e.target.value })}
          value={newCar.color}
        />
        <Button
          disabled={newCarValid}
          variant="contained"
          onClick={async () => {
            const response = await addCar(newCar);
            if (response) setUpdate();
            setNewCar({ name: "", color: "#000000" });
          }}
        >
          Create
        </Button>
      </Form>
      <Form>
        <Input
          disabled={_.isEmpty(selectedCar)}
          id="changeCar"
          aria-describedby="my-helper-text"
          placeholder="Change name"
          value={selectedCar.name || ""}
          onChange={(e) =>
            setSelectedCar({ ...selectedCar, name: e.target.value })
          }
        />
        <input
          disabled={_.isEmpty(selectedCar)}
          type="color"
          value={selectedCar.color || "#000000"}
          onChange={(e) =>
            setSelectedCar({ ...selectedCar, color: e.target.value })
          }
        />
        <Button
          disabled={_.isEmpty(selectedCar)}
          variant="contained"
          onClick={async () => {
            const response = await updateCar(selectedCar);
            if (response) setUpdate();
          }}
        >
          Change
        </Button>
      </Form>
      <Form>
        <Button variant="contained">Race</Button>
        <Button variant="contained">Reset</Button>
        <Button
          onClick={() => {
            const response = addOHCars();
            if (response) setUpdate();
          }}
          variant="contained"
        >
          +100 cars
        </Button>
      </Form>
    </DivCol>
  );
}

export default Options;
