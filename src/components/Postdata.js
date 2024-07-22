import React from 'react'
import axios from 'axios'
import {useState} from 'react'

const Postdata = () => {

    const data={
        fname:"",
        lname:""
    }
    const[inputdata,setinputData]=useState(data)

    const handleData=(e)=>{
    setinputData(e.target.value)
    }

    
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",inputdata)
        .then((res)=>{
            console.log(res)
        })

    }

  return (
    <>
    <label htmlFor='fname'>First Name</label>
    <input type='text' name='fname' value={inputdata.fname} onChange={handleData}></input>
    <br></br>
    <br></br>
    <label>Last Name</label>
    <input type='text' name='lname' value={inputdata.lname} onChange={handleData}></input>
    
    <br></br>
    <br></br>
   <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Postdata
