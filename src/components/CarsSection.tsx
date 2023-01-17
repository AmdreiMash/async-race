import { Button } from "@mui/material";
import React from "react";
import { ReactComponent as CarSvg } from "../assets/car.svg";
import finish from "../assets/finish.svg";
import { CarData } from "../types/propsTypes";
import { DivBorder, Grid, Img } from "./componentsStled";

function CarsSection(props: { data: CarData[] }) {
  const { data } = props;
  const cars =
    data.length > 0 ? (
      data.map((car: CarData) => (
        <>
          <Grid key={car.id} style={{ display: "grid" }}>
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
            <CarSvg width="100px" height="50px" fill={car.color} />
            <Img src={finish} alt="финиш" />
          </DivBorder>
          <p>{car.name}</p>
        </>
      ))
    ) : (
      <div>
        <p>Garage is loding...</p>
      </div>
    );

  return <section>{cars}</section>;
}

export default CarsSection;
