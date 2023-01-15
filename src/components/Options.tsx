import styled from "@emotion/styled";
import { Input, Button } from "@mui/material";

const Options = () => {
  return (
    <Div>
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
