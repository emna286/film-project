
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from'./Nav';
import StarRatingComponent from 'react-star-rating-component';

import React, { useState,useRef, useEffect } from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
const listfilm=[
 ]
function App() {
  

  const [list,setList]=useState([ {name:"The invitation",imgsr:"https://m.media-amazon.com/images/M/MV5BZGQwZWQ0NzctMTcwMS00NzQ0LTgyOGQtMTg0NDk1OTQyYzYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",rate:"4"},
  {name:"BlackPanther",imgsr:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/10/black-panther-wakanda-forever-domestic-box-office-prediction-update-01.jpg",rate:"4.5"},
  {name:"Harry Potter",imgsr:"https://static.tvtropes.org/pmwiki/pub/images/f321f0be_1937_4f71_87c3_d436edfe37af.png",rate:"5"},
])
  
  const [filtredlist,setFiltredlist]=useState(list)
  useEffect(()=>{
      setFiltredlist(list)
  },[list])
  const p=useRef()
  const p2=useRef()
  const p3=useRef()
  const add=()=>{
    setList([...list,{
      name:p.current.value,
      rate:p2.current.value,
      imgsr:p3.current.value,
    }])
   console.log(list)
  }
  return (
 <div className="App">
     <Nav setFiltredlist={setFiltredlist} list={list}/>
     <input type={"text"} ref={p} placeholder="name of film"/>
     <input type={"text"} ref={p2} placeholder="rate of film"/>
     <input type={"text"} ref={p3} placeholder="image of film"/>
    
     <button onClick={add}>add</button>
     <main className="films">
      
     {filtredlist.map(e=><p>
      <img className="imgstyle" src={e.imgsr}></img>
      <div className="titl">
      <div>
      {e.name}
      </div>
      <div>
    
    
     <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={e.rate}
        />
     </div>
     </div>
     </p>)}
     </main>

 
      

    
</div>
    
  );
}

export default App;
