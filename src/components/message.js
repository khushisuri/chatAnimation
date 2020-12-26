import React from "react";
import  '../components/message.css';
import { FiCheck } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
   
});

const message=(props)=>{
   
    return(
        (props.idVal)?
        <div id={props.idVal}
        className="msg" style={{alignSelf:props.align}}>
            <p>{props.children}</p>
            {props.align==="flex-end"?<FiCheck color="white" size={15}></FiCheck>:null}
        </div>:
        (props.source)?
        <div data-aos={props.aos}
        data-aos-duration="500" 
        className="msg" style={{alignSelf:props.align}}>
            <img src={props.source} alt="gift"></img>
            {props.align==="flex-end"?<FiCheck color="white" size={15}></FiCheck>:null}
        </div>:
        <div data-aos={props.aos}
        data-aos-duration="500" 
        className="msg" style={{alignSelf:props.align}}>
            <p>{props.children}</p>
            {props.align==="flex-end"?<FiCheck color="white" size={15}></FiCheck>:null}
        </div>
        
    )
}

export default message;