import {useState} from 'react';
import {auth} from '../config/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

function ResetPassword(){

    const forgotPassword = (()=>{
        sendPasswordResetEmail(auth, email).then(()=>{
            alert("check your email")

        }).catch((error)=>{
            
        })
    })
    const [email, setPassword] = useState('')
    return (
        <div className="container">

            <h1>Reset your password</h1>
            <input type="text" placeholder="Enter email" onChange={(event)=>setPassword(event.target.value)}/><br></br>

            <button onClick={forgotPassword}>Reset password</button>

        </div>

    )

}
export default ResetPassword;