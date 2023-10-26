import { useState } from "react";
import { axios } from "axios";

export const useData = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    axios
      .get(url)
      .then((json) => {
        if (!ignore) setData(json);
      })
      .catch((err) => {});
    // clean up function
    return () => {
      ignore = true;
    };
  }, []);
  return data;
};
