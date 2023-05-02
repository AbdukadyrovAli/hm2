import "./Content.css";
import { Button } from "../helpers/Functions";
import React from 'react'

export const MovieItem = ({ title, img, rating, width }) => {
  return (
    <li class="movie-element">
        <div class="movie-element-image">
          <img src= {img} alt=''/>
        </div>
        <div class="movie-element-info">
          <h2>{title}</h2>
          <div>
          <p> {rating}/5 stars</p>
          <Button width="130px" marginLeft="40px" backgroundColor="red" height='40px' color='white'>
            Delete
          </Button>
          <Button width="100px" marginLeft="40px" backgroundColor="blue"height='40px' color='white'>
            Edit
          </Button>
          </div>
          
        </div>
      </li>
  )
}
