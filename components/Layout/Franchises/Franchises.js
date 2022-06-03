import React from "react";
import Franchise from "./Franchise";
import { franchises } from "../../../Services/constants";

const Franchises = () => {
  return (
    <div className="franchises">
      {franchises.map((franchise, index) => {
        return <Franchise key={index} franchiseInfo={franchise} />;
      })}
      <Franchise />
    </div>
  );
};

export default Franchises;
