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
          <Car name="name" id="3" color="e" />
        </div>
      </main>
    </>
  );
};

export default Garage;
