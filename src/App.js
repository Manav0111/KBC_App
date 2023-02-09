import { useEffect, useState } from 'react';
import Question from './Question';
import Startpage from './Startpage';
import './style.css';
import Timer from './Timer';
import image from './winner.jpg';



function App() {

const[QuestionNo,SetQuestionNo]=useState(1);
const[timeOut,setTimeOut]=useState(false); 
const[earned,Setearned]=useState(0); 
const[count,setCount]=useState(0);

    const data =[
      {
        id:1,
        question:"Rolex is a company that specializes is what type of products? ",
        answer:[
          {
            text:"Phone",
            correct:false
          },
          {
            text:"Watches",
            correct:true
          },
          {
            text:"Food",
            correct:false
          },
          {
            text:"Cosmetic",
            correct:false
          }
         
        ]
      },
      {
        id:2,
        question:"When did the website `Facebook` launch? ",
        answer:[
          {
            text:"2004",
            correct:true
          },
          {
            text:"2005",
            correct:false
          },
          {
            text:"2006",
            correct:false
          },
          {
            text:"2007",
            correct:false
          }
         
        ]
      },
      {
        id:3,
        question:"Who played the character of harry pottetr in movie?  ",
        answer:[
          {
            text:"Robert ",
            correct:false
          },
          {
            text:"David",
            correct:false
          },
          {
            text:"Peter",
            correct:false
          },
          {
            text:"Daniel Red Cliff",
            correct:true
          }
         
        ]
      },
      {
        id:4,
      question:". Which of the following companies was originally started as a loom manufacturing unit in 1909? ",
        answer:[
          {
            text:"Suzuki ",
            correct:true
          },
          {
            text:"CEAT",
            correct:false
          },
          {
            text:"Honda",
            correct:false
          },
          {
            text:"Mercedes",
            correct:true
          }
         
        ]
      },
      {
        id:5,
      question:"What is the profession of Kabir in the film Kabir Singh? ",
        answer:[
          {
            text:"Engineer",
            correct:false
          },
          {
            text:"Cricketor",
            correct:false
          },
          {
            text:"Athlete",
            correct:false
          },
          {
            text:"Doctor",
            correct:true
          }
         
        ]
      },
      {
        id:6,
      question:"Which state is the largest producer of sugarcane in India? ",
        answer:[
          {
            text:"Maharashtra",
            correct:false
          },
          {
            text:"Karnataka",
            correct:false
          },
          {
            text:"Madhya Pardesh",
            correct:false
          },
          {
            text:"Uttar Pardesh",
            correct:true
          }
         
        ]
      },
      {
        id:7,
      question:"Who of the following personalities is not married to a sports person? ",
        answer:[
          {
            text:"Anushka Sharma",
            correct:false
          },
          {
            text:"Sakshi Singh Rawat",
            correct:false
          },
          {
            text:"Mahesh Bhupathi",
            correct:true
          },
          {
            text:"Sharmila Tagore",
            correct:false
          }
         
        ]
      },
      {
        id:8,
      question:" For which of those groups has MS Dhoni performed two seasons in IPL?",
        answer:[
          {
            text:"Chennai Super Kings",
            correct:false
          },
          {
            text:"Rising Pune Supergiant's",
            correct:true
          },
          {
            text:"Deccan Charges",
            correct:false
          },
          {
            text:"Gujrat Lions",
            correct:false
          }
         
        ]
      },
      {
        id:9,
      question:"In which state is this mountain peak located?",
        answer:[
          {
            text:"Himachal Pardesh",
            correct:false
          },
          {
            text:"Uttrakhand",
            correct:true
          },
          {
            text:"Maharashtra",
            correct:false
          },
          {
            text:"Tamil Nadu",
            correct:false
          }
         
        ]
      },
      {
        id:10,
      question:"Which YouTuber star's real name is Ajey Nagar?",
        answer:[
          {
            text:"Mostly Sane",
            correct:false
          },
          {
            text:"Flying beast",
            correct:false
          },
          {
            text:"BB ki vines",
            correct:false
          },
          {
            text:"Carry Minati",
            correct:true
          }
         
        ]
      },
      {
        id:11,
      question:" Which of the following actors is fondly known as Chi Chi?",
        answer:[
          {
            text:"Varun Dhawan",
            correct:false
          },
          {
            text:"Govinda",
            correct:true
          },
          {
            text:"Kartik Aryan",
            correct:false
          },
          {
            text:"Tushar Kapoor",
            correct:false
          }
         
        ]
      },
      {
        id:12,
      question:"Which Indian batsmen have scored two double centuries in back to back test series in 2019?",
        answer:[
          {
            text:"Rohit Sharma ",
            correct:false
          },
          {
            text:"KL Rahul",
            correct:false
          },
          {
            text:"Mayank Agarwal",
            correct:true
          },
          {
            text:"Virat Kholi",
            correct:false
          }
         
        ]
      },
      {
        id:13,
      question:"Who is this tech entrepreneur and CEO of the electric vehicle company, Tesla?",
        answer:[
          {
            text:"Elon Musk ",
            correct:true
          },
          {
            text:"Jack Dorsey",
            correct:false
          },
          {
            text:"Drew Houston ",
            correct:false
          },
          {
            text:"Brain Chesky",
            correct:false
          }
         
        ]
      },
      {
        id:14,
      question:"Which of these was developed by Tim Berners-Lee?",
        answer:[
          {
            text:"Karate ",
            correct:false
          },
          {
            text:"Nano Chip",
            correct:false
          },
          {
            text:"World Wide Web ",
            correct:true
          },
          {
            text:"Coma",
            correct:false
          }
         
        ]
      },
      {
        id:15,
      question:"Which of these mobile games might require the player to walk around in the real go?",
        answer:[
          {
            text:"Gangster ",
            correct:false
          },
          {
            text:"Pub G",
            correct:false
          },
          {
            text:"Warrior",
            correct:false
          },
          {
            text:"Pokemon GO",
            correct:true
          }
         
        ]
      },
    ]
    const obj=[
      {id:1,price:"100 Rs"},
      {id:2,price:"1000 Rs"},
      {id:3,price:"5000 Rs"},
      {id:4,price:"10,000 Rs"},
      {id:5,price:"50,000 Rs"},
      {id:6,price:"1,00000 Rs"},
      {id:7,price:"5,00000 Rs"},
      {id:8,price:"10,00000 Rs"},
      {id:9,price:"30,00000 Rs"},
      {id:10,price:"50,00000 Rs"},
      {id:11,price:"70,00000 Rs"},
      {id:12,price:"1,0000000 Rs"},
      {id:13,price:"5,0000000 Rs"},
      {id:14,price:"7,0000000 Rs"},
      {id:15,price:"10,0000000 Rs"}

    ].reverse();

    useEffect(()=>{
      QuestionNo>1 && Setearned(obj.find((e)=>e.id===QuestionNo-1).price);
    },[obj,QuestionNo])

// timeOut means wrong answer selected
  return (

 count==1?
  <div className='app'>
    <div className='main'>
      
      {timeOut?(<h1 className='endtext'>{QuestionNo==1?`You Earned:${earned}Rs`:`You Earned:${earned}` }</h1>        ):(
     <>
     {QuestionNo!==16?<><div className='top'>
      <div className='timer'><Timer setTimeOut={setTimeOut} Setearned={Setearned} QuestionNo={QuestionNo}  /></div>
      </div>
      <div className='bottom'>
        <Question 
      data={data}
      setTimeOut={setTimeOut}
      QuestionNo={QuestionNo}
      SetQuestionNo={SetQuestionNo}/>
         </div></>:
         <>
         <img className='winner' src={image}></img>
         <h1 className='endtext jackpot'> Jackpot You Won: {earned}</h1>
         </>
         }

      </>
         
    )}
    </div>
    <div className='sidecontainer'>
      <ul className='moneylist' >
        {
          obj.map((e)=>{
            return(
          <li className={QuestionNo===e.id?"moneylistitem active":"moneylistitem"} >
          <span className='questionno'>{e.id}</span>
          <span className='price'>{e.price}</span>
          </li>
          )
          })}
      </ul>
    </div>
  </div>:<Startpage setCount={setCount}/>
 );
}

export default App;
