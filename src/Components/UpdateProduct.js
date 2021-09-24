import React from 'react'
import Header from './Header'
import {withRouter} from 'react-router-dom'
import { useState } from 'react'
function UpdateProduct(props){
    console.log("props",props)

    const[name,setName]=useState("sumsang")
    const[price,setPrice]=useState("price")
    const[description,setDescription]=useState("description")
    const[file,setFile]=useState("")


    function editproduct(id){
        alert(id)
    }
   
    return(
        <div>
            <Header/>
            <h1>Update Product</h1>
            <input type="text" onChange={(e)=>setName(e.target.value)} defaultValue={name}/> <br/><br/>
            <input type="text" onChange={(e)=>setPrice(e.target.value)} defaultValue={price}/> <br/><br/>
            <input type="text" onChange={(e)=>setDescription(e.target.value)} defaultValue={description}/> <br/><br/>
            <input type="file" onChange={(e)=>setFile(e.target.value)} defaultValue={file}/> <br/><br/>
            <button onClick={editproduct}>Update</button>
        </div>
    )
}
export default withRouter(UpdateProduct)