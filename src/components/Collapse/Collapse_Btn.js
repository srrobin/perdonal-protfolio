import React,{useState,useRef} from 'react';
import './collapse_btn.css'
import info from '../../Utils/data'
const Collapse_Btn = (props) => {
    const[isOpen,setIsOpen]=useState(false);
    const parentRef=useRef();

    return (
          <>
            <p>
                <div className="btn btn-outline-primary btn-sm active" role="button" aria-pressed="true" 
                 onClick={()=> setIsOpen(!isOpen)}> {props.label}  {info.button_down_icon}</div>
            </p>
            <div className= "content" ref={parentRef}   
            style={ isOpen? {height: parentRef.current.scrollHeight +"px" ,}:{height:"0px"}}> 
            {props.children}
            </div>
          </>
    );
};

export default Collapse_Btn;