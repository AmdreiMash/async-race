import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <header style={{ margin: "10px 0" }}>
      <StyledLink to={"/"}>Garage</StyledLink>
      <StyledLink to={"/Winners"}>Winners</StyledLink>
    </header>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 10px;
  &:hover {
    text-decoration: underline;
    color: red;
  }
`;

export { Links };
