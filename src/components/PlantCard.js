import React, {useState} from "react";

function PlantCard({plant, onDelete}) {

const [inStock, setInStock] = useState(true)
const [price, setPrice] = useState(plant.price)

function handleClick() {
  setInStock(!inStock)
}

function handleDelete() {
  fetch(`http://localhost:6001/plants/${plant.id}`, {
    method: "DELETE",
  })
  .then((res) => res.json())
  .then(() => onDelete(plant))
}

function handleEditSubmit(e) {
  e.preventDefault();
  fetch(`http://localhost:6001/plants/${plant.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({price})
  })
  // .then((res) => res.json())
  // .then((data) => onEdit(data))
}

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick} >Out of Stock</button>
      )}

      <button onClick={handleDelete} >Delete</button>

      <label>New Price</label>
      <form onSubmit={handleEditSubmit}>
        <input 
          onChange={(e) => setPrice(parseFloat(e.target.value))} 
          value={price} 
          type="text"
        ></input>
        <button>Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
