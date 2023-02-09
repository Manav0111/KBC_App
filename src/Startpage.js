import React, { useState } from 'react'
import './style1.css';

export default function Startpage({setCount}) {
  const[name,Setname]=useState("");

  const CheckName=()=>{
    if(name=="")
    {
      alert("Please Enter Player Name");
    }
    else
    {
      setCount(1);
    }
  }
  return (
    <>
    <div className='startdiv'>
      <h1 id='welc'>WELCOME TO KAUN BANEGA CROREPATI</h1>
      <input type="text" id='tex'  onChange={(e)=>Setname(e.target.value)} placeholder='Enter Player Name'/>
      <button type="button" className='btn' onClick={CheckName}>Start Game</button>
      </div>

    </>
  )
}
