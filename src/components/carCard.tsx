import { ReactComponent as CarSvg } from "./assets/car.svg";
import finish from "./assets/finish.svg";
import { CarProps } from "../types/propsTypes";
import styled from "@emotion/styled";

const Car = (props: CarProps) => {
  return (
    <Div>
      <CarSvg width="100px" height="50px" fill="green" />
      <Img src={finish} alt="финиш" />
    </Div>
  );
};

const Div = styled.div`
  border-bottom: 5px dashed #000000;
`;
const Img = styled.img`
  position: absolute;
  right: 150px;
  width: 60px;
`;
export { Car };
