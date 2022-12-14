import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setUser(response.data);
    })();
  }, []);
  return (
    <>
      <div>Test</div>
    </>
  );
};

export default CurrentUserLoader;
