import styled from "@emotion/styled";

const Grid = styled.div`
  width: 300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  margin: 10px 0;
`;

const DivBorder = styled.div`
  border-bottom: 5px dashed #000000;
`;

const Img = styled.img`
  position: absolute;
  right: 150px;
  width: 60px;
`;

const DivCol = styled.div`
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

export { DivCol, Form, Img, DivBorder, Grid };
