import styled from "@emotion/styled";
import { Input, FormHelperText, Button } from "@mui/material";
import React from "react";

const Options = () => {
  return (
    <Div>
      <Form>
        <Input
          id="creetCar"
          aria-describedby="my-helper-text"
          placeholder="Name"
        />
        <input type="color" />
        <FormHelperText id="my-helper-text">Select color</FormHelperText>
      </Form>
      <Form>
        <Input
          id="changeCar"
          aria-describedby="my-helper-text"
          placeholder="Change name"
        />
        <input type="color" />
        <FormHelperText id="my-helper-text">Select color</FormHelperText>
      </Form>
      <Form>
        <Button variant="outlined">Race</Button>
        <Button variant="outlined">Reset</Button>
        <Button variant="outlined">+100 cars</Button>
      </Form>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  //width: 500px;
  gap: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export default Options;
