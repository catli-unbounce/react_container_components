//give all components access to the current user
import { useState, useEffect } from "react";
import axios from "axios";
export const useDataSource = (getResourceFunc) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getResourceFunc();
      // console.log(resourceUrl);
      setResource(response.data);
    })();
  }, [getResourceFunc]);

  return resource;
};
