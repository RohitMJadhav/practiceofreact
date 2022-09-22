import React from "react"
import {useState} from "react"
import About from "./About"
import Stopwatch from "./Stopwatch"
export default function Contact(){
    const[title,setTitle]=useState("")
    const[data,setData]=useState([])

    function getData(e){
     e.preventDefault()
     setData([
        ...data,{title}
     ])
     setTitle("")
    }
    console.log(data)
    return(<>
    <h1>This is Contact</h1>
   
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <button onClick={getData}>Add</button>
    
    {
        data.map((val,i)=>
        <ul key={i}><li>{val.title}</li></ul>)
    }
    <Stopwatch/>
    </>)
}