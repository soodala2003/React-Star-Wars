export const starShipData = async () => {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    return data.results;
  } catch(e) {
    console.error(e);
  }
};

export const paginatePage = async () => {
  try {
    const res = await fetch(`https://swapi.dev/api/starships/?page=1`);
    const data = await res.json();
    return data.results;
  } catch(e) {
    console.error(e);
  }
}; 


  

  

  