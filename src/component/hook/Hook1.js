import React,{useRef, useState} from 'react'
import "./hook.css"
import {Button, Input, InputGroup, InputGroupText } from 'reactstrap';
function Hook1() {
    const [flag, setFlag]=useState(true);
    const sidebarRef = useRef();
    const [count,setCount]=useState(10);

    const hand_count =()=> {
        setCount(count-1)
        setCount(a=>a-1)
    }


  return (
    <>

<Button color="danger">Danger!</Button>


    <h1>
        count: {count}
    </h1>
    <button onClick={hand_count}>tang</button>
    <div className={flag?"hook1 active":"hook1"}>
        
    <h1>hook1</h1>
    <p>Flag: {flag?"true":"false"}</p>
    
   


    </div>
    <div className='meo' ref={sidebarRef}></div>
    <button  onClick={()=>  {

setFlag(!flag)
sidebarRef.current.classList.toggle("active")

    }} >change</button>

    </>
  )
}

export default Hook1; 