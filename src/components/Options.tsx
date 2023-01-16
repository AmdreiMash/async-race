import { Input, Button } from "@mui/material";
import React from "react";
import { DivCol, Form } from "./componentsStled";

function Options() {
  return (
    <DivCol>
      <Form>
        <Input
          id="createCar"
          aria-describedby="my-helper-text"
          placeholder="Name"
        />
        <input type="color" />
        <Button variant="contained">Create</Button>
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
