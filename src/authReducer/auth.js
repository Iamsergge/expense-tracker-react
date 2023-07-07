import {createSlice} from '@reduxjs/toolkit';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../config/firebase'
import { useNavigate } from 'react-router-dom';
//import {useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';




export const authSlice = createSlice({

    
    
    name:"auth",
    initialState:{
        user:{
            email:"" ,
            password:""
        }
    },

    
    reducers:{
        signUp:(state, action)=>{
            createUserWithEmailAndPassword(auth, action.payload, action.payload
                ).then(()=>{
                alert("Registered successfully");

            }).catch((error)=>{
                console.log(error.message)
            })


        }
    },
    signIn :(state, action)=>{
        signInWithEmailAndPassword(auth, action.payload, action.payload).then (()=>{
            
            //const history = useHistory();
            alert("log in successful")
            
        }).catch((error)=>{});


        
    }
       

    })



export const {signUp} = authSlice.actions;
export default authSlice.reducer