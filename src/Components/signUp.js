import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth' ;

 import {auth} from '../config/firebase';

 import { useState } from 'react';


    function SignUp(){

        let  [email, setEmail] = useState('');
        let  [password, setPassword] = useState('');

        const register = (()=>{
            createUserWithEmailAndPassword(auth,email, password).then(()=>{
                alert("Registered successfully");

            }).catch((error)=>{
                console.log(error.message)
            })

        })
        return (
        <div className='container'>
            <h1>Sign up page</h1>
            <input type="text" placeholder="Enter email" onChange = {(event)=> setEmail=(event.target.value)} /> <br></br>

            <input type="password" placeholder="Enter password" onChange = {(event)=> setPassword=(event.target.value)} /> <br></br>

            <button onClick={register}>Sign up</button>
        </div>
    )
}
 export default SignUp;