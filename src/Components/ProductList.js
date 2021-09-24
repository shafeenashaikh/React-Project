import React from 'react';
import Header from './Header';
import {Table} from 'react-bootstrap'
function ProductList(){
    
    return(
        <div>
            <Header/>
            <div className="col-sm-8 offset-sm-2">
            <h2>Product list</h2>
    <Table striped bordered hover>
        <thead>     
            <tr>
             <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
            <th>Operations</th>
            
            </tr>
         </thead>
         <tbody>
            <tr>
                <td>1</td>
                <td>one-plus</td>
                <td><img src="C:\Users\intel\Desktop\1.jpg"/></td>
                <td>Quality product</td>
                <td>70000</td>
                <td><span className="delete">Delete</span></td>
            </tr>
            <tr>
                <td>2</td>
                <td>I-phone</td>
                <td><img src="C:\Users\intel\Desktop\1.jpg"/></td>
                <td>Apple product</td>
                <td>60000</td>
                <td><span className="delete">Delete</span></td>
            </tr>
            <tr>
                <td>3</td>
                <td>sumsang</td>
                <td><img src="C:\Users\intel\Desktop\1.jpg"/></td>
                <td>Quality product</td>
                <td>10000</td>
                <td><span className="delete">Delete</span></td>
            </tr>
        </tbody>
    </Table>
    </div> 
        </div>
    )
}
export default ProductList