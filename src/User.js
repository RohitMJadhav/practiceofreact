import React from 'react'

export default function User (props) {
  return (
    <>
     <button onClick={()=>props.setData(!props.data)}>Toggle</button>
    </>
  )
}
