import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';


function useGif() {
  const [tag, setTag] = useState('Car');
  const [imageSource, setImageSource] = useState('');
  const [loading, setLoading] = useState(true);

  const APIKEY = import.meta.env.VITE_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}`;

  async function fetchData(tag) {
    setLoading(true);

    const {data} = tag? await axios.get(`${url}&tag=${tag}`):await axios.get(url);
    setImageSource(data?.data?.images?.original?.url);
    setLoading(false);
  }

  useEffect(() => {
    
     fetchData(tag);
  }, []);


  return (
    {tag,setTag, fetchData, imageSource, loading}
  )
}

export default useGif