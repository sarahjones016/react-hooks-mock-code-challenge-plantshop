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

  function handleFormSubmit(newPlant) {
    setPlants([...plants, newPlant])
  }

  function handleSearch(newSearch) {
    setSearch(newSearch)
  }

  function handleDelete(id) {
    const filteredAndDeletedPlants = filteredPlants.filter((plant) => {
      return plant.id !== id
    })
  setPlants(filteredAndDeletedPlants)
  }

  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm onFormSubmit={handleFormSubmit}/>
      <Search onPlantSearch={handleSearch}/>
      <PlantList onPlantDelete={handleDelete} search={search} plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;