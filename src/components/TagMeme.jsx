import React from 'react'
import Loader from './Loader';
import useGif from '../hooks/useGif';


function TagMeme() {

  const {tag,setTag ,fetchData, imageSource, loading} = useGif();

  return (
     <div className='flex flex-col justify-between w-[600px] h-[500px] bg-green-400 p-4 rounded-lg shadow-md'>
        <h2 className='text-xl  text-center font-bold'>Random {tag} meme</h2>
        {loading ? <Loader/> : <img src={imageSource}  className='h-[300px]'/>}
     <div>
        <label>
        Enter Tag : 
        <input 
        type='text' 
        value={tag} 
        onChange={(e) => setTag(e.target.value)} 
        className='mt-2 p-2 border border-gray-600 rounded w-8/12' 
        />
        </label>
        
        <button 
        className='mt-2 px-4 py-2 bg-blue-500 text-white rounded w-full'
        onClick={() => fetchData(tag)}
        >
        Get Random {tag} Gif
        </button>
     </div>
    </div>
  )
}

export default TagMeme  