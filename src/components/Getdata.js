import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'

const Getdata = () => {

    const[userdata,setuserData]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
         setuserData(res.data)//this data variable present in api
         console.log(res.data)
        })
    },[])

  return (
    <>
    
    <h1>Get method</h1>
      {userdata.map((data)=>{

        return(
            <div>{data.name}</div>
        )
      })}
    
    </>
      
     
    
  )
}

export default Getdata
