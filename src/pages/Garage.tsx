/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Form } from "react-router-dom";
import Options from "../components/Options";
import CarsSection from "../components/CarsSection";
import Links from "../components/links";
import { CarData } from "../types/propsTypes";
import getGarageData from "../controller/getGatageData";

function Garage() {
  const [update, setUpdate] = useState(true);
  const [cars, setCars] = useState([] as CarData[]);
  const [selectedCar, setSelectedCar] = useState({} as CarData);
  const [page, setPage] = useState(1);
  const pageButtons = cars.length < 8;

  useEffect(() => {
    if (update) {
      getGarageData().then((data: CarData[]) => setCars(data));
      setUpdate(false);
    }
  }, [update]);
  console.log("render");

  return (
    <main style={{ marginTop: "30px" }}>
      <Links />
      <Options
        selectedCar={selectedCar}
        setUpdate={() => setUpdate(true)}
        setSelectedCar={setSelectedCar}
      />
      <div style={{ marginTop: "30px" }}>
        <h1>Garage({cars.length})</h1>
        <h2>Page({page})</h2>
        <CarsSection
          data={cars}
          setSelectedCar={setSelectedCar}
          selectedCar={selectedCar}
          setUpdate={() => setUpdate(true)}
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </Button>
        <Button disabled={pageButtons} onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </div>
    </main>
  );
}

export default Garage;
