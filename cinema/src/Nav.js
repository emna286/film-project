
import React,{useRef, useState} from 'react';
import StarRatingComponent from 'react-star-rating-component';

function Nav(props) {
  const psearch=useRef()
  const filtrer=()=>{
 props.setFiltredlist(
  props.list.filter(e=>e.name.toUpperCase().includes(psearch.current.value.toUpperCase()))
 )
  }
const[rating,setRating]=useState()
const onStarClick=(a)=>{
  console.log(a);
  setRating(a);
  props.setFiltredlist(props.list.filter(e=>e.rate>= a))
}

  return (
    <div className='title'>
        
        <b>Home </b>
        <b>Movies</b>
        <b>Reviews</b>
        <form>
          
         <input type={"text"} ref={psearch} onChange={filtrer} placeholder='search'/>   
         
       
     <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
        />
       
       </form>
    </div>
  )
}

export default Nav
