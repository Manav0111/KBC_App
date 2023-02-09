import React, { useEffect, useState } from 'react'

export default function Timer({setTimeOut,QuestionNo}) {
  const[timer,settimer]=useState(60);
  useEffect(()=>{
      if(timer===0) return setTimeOut(true);
      const  interval= setInterval(()=>{
               settimer((prev)=>prev-1); 
        },1000);

        return ()=>clearInterval(interval);
    },[setTimeOut,timer]);


    





    // useEffect(()=>{
    //     settimer(30);
    // },[QuestionNo<10]);

    useEffect(()=>{
        {QuestionNo<=10?settimer(30):settimer(60)}
    },[QuestionNo]);

    return timer;
}
