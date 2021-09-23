import React from 'react'
import { useState } from 'react'
import Header from './Header'


function AddProduct(){

    const[name,setName] = useState("");
    const[file,setFile] = useState("");
    const[price,setPrice] = useState("");
    const[description,setDescription] = useState("");

    function addproduct(){
        let item=[name,file,price,description]
        console.log("addproduct",item)
    }
    return(
        <div >
            <Header/>
            <div className="col-sm-6 offset-sm-3">
                <h1>Add Product</h1>
                <input type="text"  value={name} className="form-control" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
                <br/><br/>
                <input type="file"  value={file} className="form-control" placeholder="file" onChange={(e)=>setFile(e.target.files[0])}/>
                <br/><br/>
                <input type="text"  value={price} className="form-control" placeholder="price" onChange={(e)=>setPrice(e.target.value)}/>
                <br/><br/>
                <input type="text"  value={description} className="form-control" placeholder="description" onChange={(e)=>setDescription(e.target.value)}/>
                <br/><br/>
                <button className="btn btn-primary" onClick={addproduct}>AddProduct</button>
            </div>
        </div>
    )
}
export default AddProduct