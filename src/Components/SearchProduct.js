import React from "react";
import Header from "./Header";

function SearchProduct(){
    return(
        <duv>
            <Header/>
            <div className="col-sm-6 offset-sm-4">
                <h1>Search product</h1>
                <br/>
                <input type="text" className="form-control" placeholder="search product"/> 
            </div>
        </duv>
    )
}
export default SearchProduct