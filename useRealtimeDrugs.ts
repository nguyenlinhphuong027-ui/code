useEffect(() => {
  fetch("http://localhost:3000/api/drugs")
    .then(res => res.json())
    .then(setDrugs)
    .catch(console.error);
}, []);
