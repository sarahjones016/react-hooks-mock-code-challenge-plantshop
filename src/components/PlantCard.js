import React, {useState} from "react";

function PlantCard({plant, onDelete}) {

const [outOfStock, setOutOfStock] = useState(true)

function handleClick() {
  setOutOfStock(!outOfStock)
}

function handleDelete() {
  fetch(`http://localhost:6001/plants/${plant.id}`, {
    method: "DELETE",
  })
  .then((res) => res.json())
  .then(() => onDelete(plant))
}

function handleEdit() {
  console.log("edit price")
}

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {outOfStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick} >Out of Stock</button>
      )}
      <button onClick={handleDelete} >Delete</button>
      <button onClick={handleEdit} >Edit Price</button>
    </li>
  );
}

export default PlantCard;
