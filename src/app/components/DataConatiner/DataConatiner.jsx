"use client";
import { useState } from "react";
import Card from '../Card/Card';
import style from './style.module.scss';

function DataContainer({ cardData }) {
  const [newCardData, setNewCardData] = useState(cardData);

  const onDelete = (id) => {
    setNewCardData(newCardData.filter(data => data.id !== id));
  };

  const onEdit = (editedData) => {
    setNewCardData(newCardData.map(data => data.id === editedData.id ? editedData : data));
  };

  return (
    <div className={style.cardContainer}>
      {newCardData.map((data) => (
        <Card key={data.id} data={data} onDelete={() => onDelete(data.id)} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default DataContainer;
