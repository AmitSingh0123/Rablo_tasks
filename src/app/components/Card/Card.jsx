"use client";
import { useState } from "react";
import style from "./style.module.scss";

function Card({ data, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSave = () => {
    onEdit(editedData);
    setIsEditing(false);
  };

  return (
    <div className={style.cardBody}>
      {isEditing ? (
        <div className={style.inputContainer}>
          <input
            type="text"
            name="name"
            value={editedData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={editedData.description}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            value={editedData.price}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            value={editedData.category}
            onChange={handleChange}
          />
          <input
            type="number"
            name="stock"
            value={editedData.stock}
            onChange={handleChange}
          />
          <input
            type="number"
            name="rating"
            value={editedData.rating}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <>
          <img src={data.imageUrl} alt={data.name} />
          <h3>{data.name}</h3>
          <p>{data.description}</p>
          <p>Price: ${data.price}</p>
          <p>Category: {data.category}</p>
          <p>Stock: {data.stock}</p>
          <p>Rating: {data.rating}</p>
          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button className={style.btn} onClick={onDelete}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
