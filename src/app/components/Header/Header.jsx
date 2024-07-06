"use client";
import { useState } from "react";
import styles from "./style.module.scss";

function Header({ cardData }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = () => {
    const filterData = cardData.filter((data) =>
      data.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filterData);
  };
  const handleCloseBtn =()=>{
    setFilteredData([])
  }

  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        {filteredData.length !== 0 && (
        <div className={styles.container}>
          <div className={styles.closeBtn} onClick={handleCloseBtn}>+</div>
          <div className={styles.cardContainer}>
          {filteredData.map((data) => (
            <div className={styles.cardBody}>
            <img src={data.imageUrl} alt={data.name} />
            <h3>{data.name}</h3>
            <p>{data.description}</p>
            <p>Price: ${data.price}</p>
            <p>Category: {data.category}</p>
            <p>Stock: {data.stock}</p>
            <p>Rating: {data.rating}</p>
            <div>
              <button>Edit</button>
              <button className={styles.btn}>Delete</button>
            </div>
          </div>
          ))}
          </div>
        </div>
      )}
      </div>
    </header>
  );
}

export default Header;
