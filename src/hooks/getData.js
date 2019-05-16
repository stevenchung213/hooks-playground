import { useEffect, useState } from 'react';

const useFetch = url => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  
  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }
  
  useEffect(() => {
    fetchData()
  }, [url]);
  // useEffect(() => {
  //   //   fetch(url, {
  //   //     signal: abort.signal
  //   //   }).then(resp => resp.json())
  //   //     .then(json => {
  //   //       setData(json);
  //   //     });
  //   // }, []);
  
  return { loading, data };
  
};

export default useFetch;
