import { Input, Button } from "@mui/material";
import React, { useState } from "react";
import addCar from "../controller/addCar";
import { DivCol, Form } from "./componentsStled";
//! добавить функию изменения текущей мащины
function Options(props: { onClick: () => void }) {
  const [newCar, setNewCar] = useState({ color: "#000000", name: "" });
  const newCarValid = newCar.name === "";
  const { onClick } = props;
  return (
    <DivCol>
      <Form>
        <Input
          id="createCar"
          aria-describedby="my-helper-text"
          placeholder="Name"
          onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
        />
        <input
          type="color"
          onChange={(e) => setNewCar({ ...newCar, color: e.target.value })}
        />
        <Button
          disabled={newCarValid}
          variant="contained"
          onClick={() => {
            addCar(newCar);
            onClick();
          }}
        >
          Create
        </Button>
      </Form>
      <Form>
        <Input
          id="changeCar"
          aria-describedby="my-helper-text"
          placeholder="Change name"
        />
        <input type="color" />
        <Button variant="contained">Change</Button>
      </Form>
      <Form>
        <Button variant="contained">Race</Button>
        <Button variant="contained">Reset</Button>
        <Button variant="contained">+100 cars</Button>
      </Form>
    </DivCol>
  );
}

export default Options;
