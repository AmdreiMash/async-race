import { ReactComponent as CarSvg } from "./assets/car.svg";
import finish from "./assets/finish.svg";
import { CarProps } from "../types/propsTypes";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const Car = (props: CarProps) => {
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
      <Div>
        <CarSvg width="100px" height="50px" fill="green" />
        <Img src={finish} alt="финиш" />
      </Div>
    </section>
  );
};

const Grid = styled.div`
  width: 300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  margin: 10px 0;
`;

const Div = styled.div`
  border-bottom: 5px dashed #000000;
`;

const Img = styled.img`
  position: absolute;
  right: 150px;
  width: 60px;
`;

export { Car };
