import React,{useState} from 'react'

function Register(){

    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");

    function signup(){
        let item={name,password,email}
        console.log(item)
    }
    return(
        <div className="col-sm-6 offset-sm-3" >
            <h2>User Sign Up</h2>
            <input type="text" value={name}  onChange={(e)=>setName(e.target.value)} className="form-control"/>
            <br/><br/>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"/>
            <br/><br/>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
            <br/><br/>
            <button onClick={signup} className="btn btn-primary">Sign Up</button>
        </div>
    )
}
export default Register