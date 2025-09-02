import React from 'react'
import Loader from './Loader';
import useGif from '../hooks/useGif';

function RandomMeme() {

 const {fetchData, imageSource, loading} = useGif();

  return (
    <div className='flex flex-col justify-between  w-[600px] h-[500px] bg-yellow-200 p-4 rounded-lg shadow-md'>
        <h2 className='text-xl  text-center font-bold'>Random meme</h2>
        {loading ? <Loader/> : <img src={imageSource} alt='Random Meme'  className=' h-[300px]'/>}
        <button onClick={fetchData} className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'>Get New Gif</button>
    </div>
  )
}

export default RandomMeme