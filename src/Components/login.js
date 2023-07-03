import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {auth} from '../config/firebase';

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const handleClick = ()=> {

        signInWithEmailAndPassword(auth, email, password).then (()=>{
            alert("log in successful")
            navigate('/home')
        }).catch((error)=>{

        })

        
    }
       

    
    return ( 
    <div>
        <h1>Login Page</h1>
        <input type="text" placeholder="Enter email" onChange={(event)=>setEmail(event.target.value)}/> <br></br>
        <input type="password" placeholder="Enter password" onChange={(event)=>setPassword(event.target.value)}/> <br></br>
        <button onClick={handleClick}>login</button><br></br><br></br>
        <Link to='/forgotPassword'>Forgot Password</Link>

        <Link to='/signUp'>Don`t have an acoount : Sign Up</Link>
    </div>

    );
}
export default  Login;