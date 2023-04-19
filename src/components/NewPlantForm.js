import React, {useState} from "react";

function NewPlantForm({onFormSubmit}) {

const [name, setName] = useState("")
const [image, setImage] = useState("")
const [price, setPrice] = useState("")

function handleSubmit(e) {
  e.preventDefault();
  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json"
    },
    body: JSON.stringify({name, image, price})
  })
  .then((res) => res.json())
  .then((data) => onFormSubmit(data)
  )
}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text" 
          name="name" 
          placeholder="Plant name" 
        />
        <input 
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text" 
          name="image" 
          placeholder="Image URL" 
        />
        <input 
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;