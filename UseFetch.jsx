// Custom hook in the react need to start
// with use otherwise it wont work

import { useState, useEffect } from "react";

const useFetch = (url) => {
  // changing the state name to make it reusabke so that i can use it in the future too
  //because we will be fetching different type of data so to make sense make the changes
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      //because will be using this fetch for different component
      //it doesnot make sense to provide this hardcode api end point to this fetch
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);

    //where this url changes this gonna re-run this function to get the data for that end point
  }, [url]);

  //returning data from our custom hook same as useState hook return a data and a function to update its state
  return { data, isPending, error };
};

export default useFetch;
