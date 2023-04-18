import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

const [plants, setPlants] = useState([])
const [search, setSearch] = useState("")

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
  
  return (
    <main>
      <NewPlantForm onSubmit={handleSubmit}/>
      <Search onSearch={handleSearch} />
      <PlantList search={search} plants={plants}/>
    </main>
  );
}

export default PlantPage;
