import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({ title, fetchURL }) => {
    const [movies, setMovies] = useState([]);



    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])
    console.log(movies)

    return (
        <>
            <h2 className='font-bold md:text-xl p-4 text-white'>{title}</h2>
            <div className=' relative flex items-center'>
                <MdChevronLeft className='bg-white  rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10' size={40} /> 
                <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, id) => (
                        <Movie key={id} item={item} />
                    ))}
                </div>
                <MdChevronLeft className='bg-white  rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10' size={40} />
            </div>
        </>
    );
};

export default Row;