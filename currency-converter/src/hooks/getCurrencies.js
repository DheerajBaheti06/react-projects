import { useEffect, useState } from "react";
import axios from "axios";

function useCurrencies() {
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    axios("https://api.frankfurter.dev/v1/currencies")
      .then((res) => {
        setCurrencies(res.data);
      })
      .catch(() => {
        // Return empty object on error - hook will handle fallback
        return {};
      });
  }, []); // to prevent infinite loop

  return Object.keys(currencies);
}

export { useCurrencies };
