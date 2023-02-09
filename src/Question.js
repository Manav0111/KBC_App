import React, { useEffect, useState } from 'react'
import './style.css';
import useSound from 'use-sound';
import play from "./Sounds/src_sounds_play.mp3"
import Correct from "./Sounds/src_sounds_correct.mp4"
import Wrong  from "./Sounds/src_sounds_wrong.mp3"



function Question({data, setTimeOut,QuestionNo,SetQuestionNo,Setearned}) {
  




  const[question, SetQuestion]=useState(null);
  const[selectedAnswer,SetselectedAnswer]=useState(null);
  const[className,setclassName]=useState("answer");
  const[makedisable,setDisable]=useState("false");


  const [letsPlay]=useSound(play);
  
  const[correctAnswer]=useSound(Correct);
  const[wrongAnswer]=useSound(Wrong);
  



useEffect(()=>{
  SetQuestion(data[QuestionNo-1]); //because array index start from 0

},[data,QuestionNo]);

const delay=(duration,callback)=>{
  setTimeout(()=>{
    callback();
  },duration);
}

const handelClick=(e)=>{
  SetselectedAnswer(e);
  setclassName("answer active");
  setDisable("true");
  delay(3000,()=>{ setclassName(e.correct? "answer correct":"answer wrong")});

  delay(5000,()=>{
    if(e.correct)
    { 
      correctAnswer();
      delay(1000,()=>{
        SetQuestionNo((prev)=>prev+1);
        SetselectedAnswer(null);
        setDisable("false");
      });
    }
    else
    {
      wrongAnswer();
      delay(1000,()=>{
        setTimeOut(true);  
        

      })
      setTimeout(()=>{
        alert("Game Over Press Any key to restart");
        SetQuestionNo(1);
        setTimeOut(false);
        Setearned(0);
      },2000);


    }

  })


}

  return (
    <div className='mycomp'>
    <div className='question' >{question?.question}</div>
   <div className='answers'>
    {question?.answer.map((e)=>{
        return(
 

          <div className={selectedAnswer===e? className:"answer"} onClick={makedisable=='false'?()=>handelClick(e):""}>{e.text}</div>
          // onClick={()=>handelClick(e)}
          )
    })}

   </div>
    </div>

  )
}

export default Question;
