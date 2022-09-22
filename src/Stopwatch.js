import {useState} from "react";

let adjustTimer=undefined;
export default function Stopwatch(){
    const[count,setCount]=useState(0)
    const[start,setStart]=useState(false)

const IncreaseCount=()=>{
 adjustTimer=setInterval(()=>{
    setCount((x)=>x+1)
    
 },1000)
 setStart(true)
 }

const StopCount=()=>{
clearInterval(adjustTimer)
setStart(false)
}

function Reset(){
setCount(0)
clearInterval(adjustTimer)
setStart(false)
}

    return(
        <div >
        <div style={{backgroundColor:"yellow",width:"400px", height:"200px", borderRadius:"10px"}}>
        <h1>{count}</h1>
       <button style={{marginRight:"2px"}} disabled={start} onClick={IncreaseCount}>Start</button>
       <button style={{marginRight:"2px"}} onClick={StopCount}>Stop</button>
       <button onClick={Reset}>Reset</button>
       </div>
        </div>
    )
    }