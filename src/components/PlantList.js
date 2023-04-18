import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, search, deletePlant, onDelete}) {

  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  const deletedAndFilteredPlants = filteredPlants.filter((plant) => {
    return plant.id !== deletePlant.id
  })

  const listOfPlants = deletedAndFilteredPlants.map((plant) => {
    return <PlantCard onDelete={onDelete} plant={plant} key={plant.name}/>
  })

  return (
    <ul className="cards">{listOfPlants}</ul>
  );
}

export default PlantList;
