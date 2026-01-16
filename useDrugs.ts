import { useEffect, useState } from "react";

export function useDrugs() {
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/drugs`)
      .then(res => res.json())
      .then(setDrugs)
      .catch(console.error);
  }, []);

  return drugs;
}
