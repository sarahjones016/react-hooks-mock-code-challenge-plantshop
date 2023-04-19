import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onPlantDelete}) {

  const arrayOfPlants = plants.map((plant) => {
    return <PlantCard plant={plant} key={plant.name} onPlantDelete={onPlantDelete}/>
  })

  return (
    <ul className="cards">{arrayOfPlants}</ul>
  );
}

export default PlantList;