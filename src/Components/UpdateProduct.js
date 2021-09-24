import React from 'react'
import Header from './Header'
import {withRouter} from 'react-router-dom'
import { useState } from 'react'
function UpdateProduct(props){
    console.log("props",props)
    const[name,setName]=useState("sumsang")
    const[price,setPrice]=useState("price")
    const[description,setDescription]=useState("description")
   
    return(
        <div>
            <Header/>
            <h1>Update Product</h1>
            <input type="text" defaultValue={name}/> <br/><br/>
            <input type="text" defaultValue={price}/> <br/><br/>
            <input type="text" defaultValue={description}/> <br/><br/>
            <input type="file" defaultValue={""}/> <br/><br/>
            <button>Update</button>
        </div>
    )
}
export default withRouter(UpdateProduct)