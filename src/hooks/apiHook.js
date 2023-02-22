import axios from "axios";
import { useState, useRef } from "react";
import { app } from "../configuration";

export const useAxios = ({ url = "", method = "get", payload } = {}) => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };

  const run = async (params = {}) => {
    // remove null value
    Object.keys(params).forEach((key) =>
      params[key] === undefined || params[key] === "" || params[key] === null
        ? delete params[key]
        : {}
    );

    try {
      setLoading(true);
      const response = await axios.request({
        params,
        signal: controllerRef.current.signal,
        method,
        payload,
        url: app.baseUrl + url,
      });

      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { run, cancel, data, error, loading };
};
