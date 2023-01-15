import React from "react";
import Options from "../components/Options";
import { Car } from "../components/carCard";
import { Links } from "../components/links";

const Garage = () => {
  return (
    <>
      <main style={{ marginTop: "30px" }}>
        <Links />
        <Options />
        <div style={{ marginTop: "30px" }}>
          <h1>Garage(num)</h1>
          <h2>Page(num)</h2>
          <Car name="name" id="3" color="e" />
        </div>
      </main>
    </>
  );
};

export default Garage;
