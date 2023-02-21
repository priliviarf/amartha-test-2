import axios from "axios";
import { useState, useRef } from "react";

export const useAxios = ({ url, method = "get" }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };

  const run = async (params) => {
    try {
      const response = await axios.request({
        params,
        signal: controllerRef.current.signal,
        method,
        url,
      });

      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoaded(true);
    }
  };

  return { run, cancel, data, error, loaded };
};
