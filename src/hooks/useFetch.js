import axios from "axios";
import { useCallback, useState } from "react";

const useFetch = (baseUrl) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const get = useCallback(async (path) => {
    try {
      setLoading(true);
      const response = await (await axios(baseUrl + path)).data;
      console.log("data: ", data);
      setLoading(false);
      setData(response);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }, []);

  return { data, loading, get, error };
};

export default useFetch;
