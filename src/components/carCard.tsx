import { Button } from "@mui/material";
import React from "react";
import { ReactComponent as CarSvg } from "../assets/car.svg";
import finish from "../assets/finish.svg";
import { type CarProps } from "../types/propsTypes";
import { DivBorder, Grid, Img } from "./componentsStled";

function Car(props: CarProps) {
  const { name } = props;
  return (
    <section>
      <Grid style={{ display: "grid" }}>
        <Button style={{ gridArea: "1 / 1 / 2 / 3" }} variant="contained">
          Select
        </Button>
        <Button style={{ gridArea: "1 / 3 / 2 / 5" }} variant="contained">
          Remove
        </Button>
        <Button style={{ gridArea: "2 / 1 / 3 / 2" }} variant="outlined">
          A
        </Button>
        <Button style={{ gridArea: "2 / 2 / 3 / 3" }} variant="outlined">
          B
        </Button>
      </Grid>
      <DivBorder>
        <CarSvg width="100px" height="50px" fill="green" />
        <Img src={finish} alt="финиш" />
      </DivBorder>
      <p>{name}</p>
    </section>
  );
}

export default Car;
