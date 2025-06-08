import axios from "axios";
import { useEffect, useState } from "react";

export const useKitchenAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8092/kitchen/check-auth", {
        withCredentials: true,
      })
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false));
  }, []);

  return isAuthenticated;
};
