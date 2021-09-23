import React,{useState} from 'react'
import Header from './Header'

function Login(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function login(){
        console.log("login",email,password)
    }
    return(
        <div>
            <Header/> 
            <div className="col-sm-6 offset-sm-3">
                <h1>Login Page</h1>
                <input type="text"  vlue={email} className="form-control" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
                <br/><br/>
                <input type="text"  value={password} className="form-control" placeholder="passwo" onChange={(e)=>setPassword(e.target.value)}/>
                <br/><br/>
                <button className="btn btn-primary" onClick={login}>Login</button>
            </div>
        </div>
    ) 
}
export default Login