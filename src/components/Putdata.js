import axios from 'axios'
import React, { useState } from 'react'

const Putdata = () => {

   const DATA={
    firname:"",
    secname:""
   }


   const [userData,setUserdata]=useState(DATA);

   const handleDATA=(evt)=>{
    setUserdata(evt.target.value)

   }
const handleSUB=(evt)=>{
  evt.preventDefault();
  axios.post("https://jsonplaceholder.typicode.com/users",userData)
  .then((res)=>{
    console.log(res)
  })
}

const handleUpdate=(evt)=>{
  evt.preventDefault();
  axios.put("https://jsonplaceholder.typicode.com/users/1",userData)
  .then((res)=>{
    console.log(res)
  })
}

const handleDel=(evt)=>{
  evt.preventDefault();
  axios.delete("https://jsonplaceholder.typicode.com/users/1")
  .then((res)=>{
    console.log(res)
  })
}


  return (
    <div>
      

      <label>First name:</label>
      <input type="text" name='firname' value={userData.firname} onChange={handleDATA}></input>
      <br></br>
      <br></br>
      <label>Last name:</label>
      <input type="text" name='secname' value={userData.secname} onChange={handleDATA}></input>
      <br></br>
      <br></br>
      <button onClick={handleSUB}>submit</button>
      <br></br>
      <br></br>
      <button onClick={handleUpdate}>update</button>
      <br></br>
      <br></br>
      <button onClick={handleDel}>delete</button>

    </div>
  )
}

export default Putdata;
