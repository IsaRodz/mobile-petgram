/* eslint-disable */
import { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://dummyapi.io/data/api/';
axios.defaults.headers['app-id'] = '60db7dd5d9220180ef16aa9d';
// 60db7f481343794e0380a3b7

export default function useFetch(resource) {
  const cache = {};

  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getResource = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(resource);
      if (!cache['result']) {
        setResult(data);
      }
    } catch (e) {
      setError(true);
      console.log({ e });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getResource();
  }, [resource]);

  return {
    result,
    loading,
    error,
  };
}
