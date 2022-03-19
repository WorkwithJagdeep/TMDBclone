import React, { useEffect, useState } from 'react'
import axios from './axios'

const API_KEY = "f846fc88790620faca2a01aa8693e353"
const base = "https://image.tmdb.org/t/p/original"


function Movieslist() {
    const [list, setList] = useState([])
    const [page, setPage] = useState(1)
    

    useEffect(() => {
        async function movie() {
            const data = await axios.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
            setList(data.data.results)
            return data
        }
        movie()
    }, [])
    

    return (

        <div className='movielist'>
            {
                list.map(m => (
                    <div className='list-div'>
                        <img src={`${base}${m.poster_path}`} />
                    </div>
                ))}

        </div>
    )
}

export default Movieslist