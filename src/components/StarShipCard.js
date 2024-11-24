import React, { useState, useEffect } from "react";

export default function StartshipCard (props) {
  const [starship, setStarship] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const getPaginatePages = async () => {
      try {
        const res = await fetch(`https://swapi.dev/api/starships/?page=${page + 1}`); 
        const result = await res.json();
        const data = result.results;
        setStarship(data);
      } catch(e) {
        console.error(e);
      }
    };
    getPaginatePages();
  }, [page]);  

  function handlePrevPage() {
    if (page <= 0) {
      setPage(0);
    } else {
      setPage((prev) => prev - 1);
    }
  }

  function handleNextPage() {
    if (page >= 3) {
      setPage(0);
    } else {
      setPage((prev) => prev + 1);
    }
  }

  // loaded function for when data is fetched.
  const loaded = () => {
    return (
      <div>
        <div className="pagination">
          <button className="btn" onClick={handlePrevPage}>
            PREV
          </button>
          <p className="my-auto">{page + 1} OF 4 </p>
          <button className="btn" onClick={handleNextPage}>
            NEXT
          </button>
        </div>
        <div className="cards">
        {starship.map((card, index) => {
          return (
            <li key={index}>
              <div className="each-card">
                <h2>{card.name}</h2>
                <li>Crew: {card.crew}</li>
                <li>Passengers: {card.passengers}</li>
                <li>Consumables: {card.consumables}</li>
                <li>URL: {card.url}</li>
              </div>
            </li>
          );
        })}  
        </div>
      </div>
    );
  };

  // Function for when data doesn't exist.
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // If coin has data, run the loaded function; otherwise, run loading.
  return starship ? loaded() : loading();
}
