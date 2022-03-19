import React, { useState , useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate}from "react-router-dom";
import axios from './axios'


const base = "https://image.tmdb.org/t/p/original"
const API_KEY = "f846fc88790620faca2a01aa8693e353"

function Movierow({ movie }) {

    const [detail ,setDetail] = useState([])
    let history = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
      async function detail(){
        const fetch = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=en-US`)
          setDetail(fetch.data)
        return fetch
      }
      detail()
    },[])

    const launch =()=>{
        localStorage.setItem("name" , JSON.stringify(detail))
        history("/moviesdata")
    }

    return (
        <>
            <div className={` movies`} onClick={launch}>
                <div className={`image `}>
                <img

                src={`${base}${movie.poster_path }`} />
                </div>

                <h1>{movie.title || movie.name || movie.original_title}</h1>
                <p>{movie.release_date || movie.first_air_date}</p>
            </div>
        </>
    )
}

export default Movierow
