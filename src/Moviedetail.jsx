import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from './axios'
import { AiOutlineShoppingCart, AiFillHeart, AiOutlineUnorderedList } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import {useSelector} from 'react-redux'
import { GrPrevious  } from 'react-icons/gr';

const API_KEY = "f846fc88790620faca2a01aa8693e353"
const base = "https://image.tmdb.org/t/p/original"

function Moviedetail() {
  const [ like , setLike]= useState(false)
  const color=["rgb( 230, 176, 170 ,0.83)", "rgb(1 , 180, 228 , 0.83)" , "rgb( 215, 189, 226 , 0.85)" , "rgb(  169, 204, 227 ,0.83)" , "rgb( 237, 187, 153 ,0.83)" , 'rgb( 213, 216, 220 ,0.83)']
  const rand= Math.floor(Math.random()*color.length)
  let gogo=useNavigate()


  const genre={
        28:"Action",
        12: "Adventure",
        16:"Animation",
        35:"Comedy",
               80:"Crime",
         99:"Documentary",
              18:"Drama ",
           10751:"Family   ",
           14:  "Fantasy",
          36:"  History ",
             27:"Horror ",
               10402:"Music",
            9648:"Mystery ",
             10749:"Romance",
     878:"Science Fiction",
          10770:"  TV Movie",
           53:"Thriller ",
            10752:"  War   ",
             37:"Western",
  }


  const obj =localStorage.getItem("name")
  const movie = JSON.parse(obj)
  const go=()=>{
    gogo("/")
    localStorage.removeItem("name")// DEBUG:
  }

    return (
        <div className='moviedata'>
            <p className="back" onClick={go} ><GrPrevious
            style={{color:"white" , fontSize:"38px"}}/></p>
            <div className="moviedata-container"
                style={{
                    backgroundImage: `linear-gradient(to right ,${color[rand]} 0% , ${color[rand]} 60%, ${color[rand]} 90%,${color[rand]} 95%,${color[rand]}  100%), url(${base}${movie.backdrop_path}) `,
                    backgroundPosition: "right",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"

                }}>
                <div className="left">
                    <img src={`${base}${movie.poster_path}`} alt="" />

                </div>
                <div className="midd">
                  <h1>{movie.original_title || movie.original_name}</h1>

                    <div className="midd-list">
                      <div className="genre">
                          <div className="age">16+</div>

                      </div>
                        <div className="item">
                            <AiOutlineUnorderedList fontSize={"20px"} color={"white"} />
                        </div>
                        <div className="item" onClick={(e)=>{setLike(true) ; e.preventDefault()}}>
                            <AiFillHeart fontSize={"20px"} color={like ? "red" : "white"}/>
                        </div>
                        <div className="item play">
                            <BsFillPlayFill fontSize={"25px"} color={"white"}/>
                            <p style={{color:'white'}}>Play Trailer</p>
                        </div>

                    </div>
                    <h4>Overview</h4>
                    <p style={{color:"black" , fontWeight:"500"}}>{movie.overview}</p>

                </div>
                <div className="right">
                    <p>{movie.original_title}</p>
                </div>
                <p>{movie.homepage}</p>

            </div>
        </div>
    )
}

export default Moviedetail
