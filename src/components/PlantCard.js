import React, {useState} from "react";

function PlantCard({plant, onPlantDelete}) {

  const [inStock, setInStock] = useState(true)
  const [price, setPrice] = useState(plant.price)

  function handleClick() {
    setInStock(!inStock)
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({price: parseFloat(price)})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then(() => onPlantDelete(plant.id))
  }

  return (
    <li className="card">
      <img src={plant?.image} alt={plant?.name} />
      <h4>{plant?.name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}

      <button onClick={handleDelete}>Delete</button>

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <button>Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;