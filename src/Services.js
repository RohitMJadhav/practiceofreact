
import React, { useEffect } from "react"
import {useState} from "react"
import "./services.css"

export default function Services(){
 const[name,setName]=useState("")
 const[password,setPassword]=useState("")
 const[option,setOptions]=useState("")
 const[check,setCheck]=useState(false)

    function handleSubmit(e){
    e.preventDefault()
    alert("form submission done")
    console.log(name, password, option, check )
    }
 
    return(
    <>
     
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="borderdesign">
        <h1>FORM</h1>
    <form onSubmit={handleSubmit}>
    <label>Name:</label>
    <input   type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
    <label>Password:</label>
    <input  type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
    <label>Yes/No:</label>
    <input type="checkbox" value={option} onChange={(e)=>setCheck(e.target.checked)}/>Accept all terms and conditions<br/>
    <label>Gender:</label>
    <select onChange={(e)=>setOptions(e.target.value)}>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
    </select><br/><br/>
    <input type="submit"/>
    </form>
    </div>

    {/* <h3 >Hello <span style={{display:"inline",width:"100px", height:"100px", backgroundColor:"yellow"}}>I am</span> Rohit</h3>
    <h3 >Hello <span style={{display:"inline-block",width:"100px", height:"50px", backgroundColor:"red"}}>I am</span> Rohit </h3>
    <h3 >Hello <span style={{display:"block", height:"50px", backgroundColor:"blue"}}>I am</span> Rohit</h3> */}
    </div>

    </>
    )
    }