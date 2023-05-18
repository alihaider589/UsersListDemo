import {useEffect, useState} from 'react';
import axios from 'axios';
const useApiHandler = url => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState('');
  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setdata(res.data);
        setloading(false);
      })
      .catch(data => {
        seterror(data.error);
        setloading(false);
      });
  }, [url]);
  return {data, loading, error};
};
export default useApiHandler;
