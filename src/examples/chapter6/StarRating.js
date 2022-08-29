import {useState} from "react";

import {FaStar } from "react-icons/fa";

const Star = ({selected = false, onSelect = f => f }) => (
    <FaStar color={ selected ? "red": "grey"} onClick={ () => onSelect()}/>
)

const createArray = length => [...Array(length)]


export default function StarRating({style={} ,starRatingScale=5, ...props}){

    const [starRating, setStarRating] = useState(0);

   return(
       <div style={{padding: 50, margin:20, ...style}} {...props}>
           { createArray(starRatingScale).map((s,i) =>
               (<Star key = {i} selected={i < starRating} onSelect={() => setStarRating(i + 1)}/>)
           )}
           <p> {starRating} selected out of {starRatingScale} </p>
       </div>
   );

}



