import { useState } from "react";

export const AddCatForm = ({ onAddCat }) => {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCat({ name, latinName, image });
  };

  return (
    <>
      <div className="AddCatForm">
        <form onSubmit={handleSubmit}>
          <label>Cat Name:</label>
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />

          <label>Latin Name:</label>
          <input type="text" name="latinName" value={latinName} onChange={(e) => setLatinName(e.target.value)} />

          <label>Image URL:</label>
          <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} />

          <button>Add Cat</button>
        </form>
      </div>
    </>
  );
};
