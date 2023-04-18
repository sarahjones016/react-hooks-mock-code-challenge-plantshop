import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, search, deletePlant}) {

  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  const deletedAndFilteredPlants = filteredPlants.filter((plant) => {
    return plant.id !== deletePlant.id
  })

  // const edittedPlants = deletedAndFilteredPlants.map((plant) => {
  //   if (plant.id === updatePrice.id) {
  //     return updatePrice;
  //   } else {
  //     return plant;
  //   }
  // })

  const listOfPlants = deletedAndFilteredPlants.map((plant) => {
    return <PlantCard plant={plant} key={plant.name}/>
  })

  return (
    <ul className="cards">{listOfPlants}</ul>
  );
}

export default PlantList;
