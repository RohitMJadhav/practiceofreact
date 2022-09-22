import { getDefaultNormalizer } from "@testing-library/react"
import React, { useEffect } from "react"
import {useState}from "react"
import About from "./About"
import axios from 'axios';

export default function Home(){
 
    const[data,setData]=useState([])

    useEffect(()=>{
     getData()
    },[])

    
 const getData= async () =>{
  let url='https://reqres.in/api/users'
   const res= await axios.get(url)
   console.log(res)
  setData(res.data.data)
 }


const delUser=async (index)=>{

  const resonse=await axios.delete(`https://reqres.in/api/users/${index}`)
    let del = data.filter((dat) => index!== dat.index)
    setData(del)
}

const heading=["Sr No.", "Title","Body"]
let id=1;
   return(<>
   <h1>Table</h1>
   <table className="table table-dark table-striped" style={{width:800}}>
      <thead >
         
       
         <tr key={id++} >
           <th>Id</th>
           <th>First</th>
           <th>Last</th>
           <th>Email</th>
           <th>Delete</th>
           <th>Update</th>
         </tr> 
          
      </thead>
    <tbody>
   {data.map((val,i)=>
     <tr key={i}>
      <td>{val.id}</td>
      <td>{val.first_name}</td>
      <td>{val.last_name}</td>
      <td>{val.email}</td>
      <td><button style={{color:"white", backgroundColor:"red",border:"none"}} onClick={()=>delUser(val.id)}>Delete</button></td>
      <td><button style={{color:"white", backgroundColor:"green",border:"none"}}>Update</button></td>
      
      </tr>
   )}
  </tbody>
  </table>

  {/* <button onClick={getData}>GetData</button> */}

    </>)}
