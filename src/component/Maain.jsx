import React, { useEffect, useState } from 'react'
import request from '../Request'
import axios from 'axios'

const Maain = () => {
    const [movies, setMovies] = useState([])

    const movie  = movies[Math.floor(Math.random() * movies.length )]

    useEffect(() => {
        axios.get(request.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    }, [])
    console.log(movies)
    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'>
                    {/* 28:36 */}
                </div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />

            </div>
        </div>
    )
}

export default Maain