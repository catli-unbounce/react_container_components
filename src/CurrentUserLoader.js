import React from "react";
import axios from "axios";

import React, { useState, useEffect } from "react";
const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setUser(response.data);
    })();
  }, []);
  return <>{children.map((child) => {})}</>;
};

export default CurrentUserLoader;
