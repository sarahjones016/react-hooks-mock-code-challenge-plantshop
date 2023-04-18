import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, search}) {

  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  const listOfPlants = filteredPlants.map((plant) => {
    return <PlantCard plant={plant} key={plant.name}/>
  })

  return (
    <ul className="cards">{listOfPlants}</ul>
  );
}

export default PlantList;
