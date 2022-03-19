import React, { useEffect, useState } from 'react'
import axios from './axios'
import {useSelector} from 'react-redux'
import Movierow from './Movierow'
import request from './request'

const API_KEY = "f846fc88790620faca2a01aa8693e353"

function Movie({ title, fetch, media,p , isnetflix }) {



  const [movie, setMovie] = useState([])
  const [value, setValue] = useState(0)
  const [color, setColor] = useState("black")

  useEffect(() => {
    async function data() {
      const content = await axios.get(fetch)
      console.log(content.data.results)
      setMovie(content.data.results)
      return content
    }
    data()
  }, [fetch])


  return (
    <div className={`moviecontan ${isnetflix && "netflix"}`}>
      <div className={`movie`}>
        <h1>{title}</h1>
        <div className='movie-container'>
        { /* <a
            href=""
            className='active'
            onClick={handle}>Streaming</a>
          <div style={{
            width: "120px",
            backgroundColor: "rgb(3,37,65)",
            height: "35px",
            position: "absolute",
            borderRadius: "30px",
            transform: `translateX(${value}%)`,

          }}></div>
          <a href=""
            onClick={handle}

          >on TV</a> */}
        </div>
      </div>
      <div className={`movieRow `}>
        {movie.map((movie, key) => (
          <Movierow movie={movie}
            key={movie.id}

          />
        ))}
      </div>

    </div>
  )
}

export default Movie
