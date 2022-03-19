import React, { useEffect, useState } from 'react'
import axios from './axios'
const base = "https://image.tmdb.org/t/p/w1280"

  function Banner({ fetch }) {
    const [banner, setBanner] = useState([])

    useEffect(() => {
      async function data() {
        const con = await axios.get(fetch)
        const ran = Math.floor(Math.random() * con.data.results.length - 1)
        setBanner(con.data.results[ran])
        return con
      }
      data()

    }, [])

    return (
      <div className='banner'
        style={{
          backgroundImage: `linear-gradient(rgba(8, 68, 121, 0.75) 0% , rgba(3, 37, 65, 0.75) 100%), url(${base}${banner.backdrop_path}) `,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
        <h1>Welcome.</h1>
        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
        <div className="search">
          <input type="text" placeholder='Search your items.....' />
          <button>search</button>
        </div>
      </div>
    )
  }

export default Banner
