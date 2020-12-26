import React,{useRef, useEffect,useState} from 'react';
import Msg from "./components/message"; 
import './App.css';
import { FiArrowRight } from "react-icons/fi";
import { FiCamera } from "react-icons/fi";


function App() {

   const [coordinate , setCoordinate]=useState(window.pageYOffset);
   
    const myRefOne = useRef(null);
    const myRefTwo = useRef(null);
    const myRefThree = useRef(null);
  
   
    
    const executeScrollOne = () => myRefOne.current.scrollIntoView();
    const executeScrollTwo = () => myRefTwo.current.scrollIntoView();
    const executeScrollThree = () => myRefThree.current.scrollIntoView();

  useEffect(()=>{
    initiate()
  },[coordinate])
  
 
  
 const initiate=()=>{
   setTimeout(() => {
    executeScrollOne();
    const coordinate=window.pageYOffset;
  }, 1000);
  setTimeout(() => {
    executeScrollTwo();
    const coordinate=window.pageYOffset;
    setCoordinate(coordinate);
  }, 5000);
  setTimeout(() => {
    executeScrollThree();
    const coordinate=window.pageYOffset;
    setCoordinate(coordinate);
  }, 9000);
 }
  


  return (
    
    <div className="wrap">
    <div className="nav">
     <div className="menu">
       <div></div>
       <div></div>
       <div></div>
     </div>
     <p>CHAT</p>
     </div>
    <div className="App">
    <div className="texts">
     <Msg align="flex-start" aos="fade-left">hey! how is work going on?</Msg>
     <div ref={myRefThree}></div>
     <Msg align="flex-end"  aos="fade-right">hi going on great!</Msg>
     <Msg align="flex-start"  aos="fade-left">what's the deadline</Msg>
     <Msg align="flex-end"  aos="fade-right">26th</Msg>
     <Msg align="flex-start"  aos="fade-left">any plans for christmas</Msg>
     <Msg align="flex-end"  aos="fade-right">celebrating at home!</Msg>
     <Msg align="flex-start"  aos="fade-left">thats great!</Msg>
     <div ref={myRefTwo}></div>
     <Msg align="flex-end"  aos="fade-right">wish you could have also attended</Msg>
     <Msg align="flex-start"  aos="fade-left">i wont be attending but a surprise is on its way!</Msg>
     <Msg align="flex-end"  aos="fade-right">what do you mean?</Msg>
     <Msg align="flex-start"  aos="fade-left" >your gift!!</Msg>
     <Msg align="flex-end"  aos="fade-right">omg you should'nt have</Msg>     
     <Msg align="flex-start"  aos="fade-left">Christmas is a festival to spread happiness</Msg>
     <Msg align="flex-end"  aos="fade-right">Thank you so much!!</Msg>
     <Msg align="flex-start"  aos="fade-left">gifts are a must on Christmas </Msg>
     <Msg align="flex-end"  aos="fade-right">That's why mine is on its way too</Msg>     
     <Msg align="flex-start"  aos="fade-left">omg hahaha</Msg>
     <div ref={myRefOne}></div>
     <Msg align="flex-end"  aos="fade-right">gifts are a must on Christmas</Msg>
     <Msg align="flex-start"  aos="fade-left">ok got to go see you on new years</Msg>
     <Msg align="flex-end" idVal="animatedEl" aos="fade-right">Bye see you</Msg> 
    </div>
    
    </div>
    <div className="input">
      <div className="top">
      <FiCamera size={25} color="purple"></FiCamera>
      <p>hey! how is work going on?</p>
      </div>
      <div className="bottom"> 
      <FiArrowRight size={20} color="white"></FiArrowRight>
      </div>
    </div>
    </div>
  );
}

export default App;
