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
  const [totalCount, setTotaCount] = useState(0);
  const [race, toggleRace] = useState(false);

  useEffect(() => {
    if (update) {
      getGarageData(page).then((data) => {
        setCars(data.json);
        setTotaCount(data.totalCount);
      });
      setUpdate(false);
    }
  }, [update, page]);

  return (
    <main style={{ marginTop: "30px" }}>
      <Links />
      <Options
        toggleRace={() => toggleRace(!race)}
        selectedCar={selectedCar}
        setUpdate={() => setUpdate(true)}
        setSelectedCar={setSelectedCar}
      />
      <div style={{ marginTop: "30px" }}>
        <h3>
          Garage({totalCount}) Page({page})
        </h3>
        <CarsSection
          race={race}
          data={cars}
          setSelectedCar={setSelectedCar}
          selectedCar={selectedCar}
          setUpdate={() => setUpdate(true)}
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <Button
          disabled={page === 1}
          onClick={() => {
            setPage(page - 1);
            setUpdate(true);
          }}
        >
          Prev
        </Button>
        <Button
          disabled={totalCount < 8 || totalCount <= 7 * page}
          onClick={() => {
            setPage(page + 1);
            setUpdate(true);
          }}
        >
          Next
        </Button>
      </div>
    </main>
  );
}

export default Garage;
