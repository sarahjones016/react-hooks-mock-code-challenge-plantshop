import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

const [plants, setPlants] = useState([])
const [search, setSearch] = useState("")
const [deletePlant, setDeletePlant] = useState("")
// const [updatePrice, setUpdatePrice] = useState("")

useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then((res) => res.json())
  .then((data) => setPlants(data))
}, [])

function handleSubmit(newPlant) {
  setPlants([...plants, newPlant])
}

function handleSearch(newSearch) {
  setSearch(newSearch)
}

function handleDelete(removedPlant) {
  setDeletePlant(removedPlant)
}

// function handlePriceChange(newPrice) {
//   setUpdatePrice(newPrice)
// }
  
  return (
    <main>
      <NewPlantForm 
        onSubmit={handleSubmit}
      />
      <Search 
        search={search}
        onSearch={handleSearch}
      />
      <PlantList 
        // updatePrice={updatePrice} 
        // onEdit={handlePriceChange} 
        onDelete={handleDelete} 
        deletePlant={deletePlant} 
        search={search} 
        plants={plants}
      />
    </main>
  );
}

export default PlantPage;
