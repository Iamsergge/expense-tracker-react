import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {addDoc, collection,getDocs} from "firebase/firestore";
import { db } from './config/firebase';
import { async } from "@firebase/util";
import './App.css'
import AddTransaction from './Components/add';
import DisplayTransaction from './Components/displayTransaction';
import Home from './Components/home';
import SignUp from './Components/signUp';
import NoPageFound from './Components/noPageFound';
import Login from './Components/login';
import ResetPassword from './Components/forgotPassword';
import CurrencyConvert from './Components/currency';

function App() {
  const [transactions, setTransactions] = useState([]);

  const add = (transactionItem, amount, transactionType) => {
    console.log(amount);
    setTransactions((transactions) => [
      ...transactions,
      { transactionItem: transactionItem, amount: amount, transactionType: transactionType },
    ]);
    console.log(transactions);
  };
  useEffect(()=>{
     getTransaction();

  })
  const getTransaction = (async()=>{
    try {
      const querySnapShort = await getDocs(collection(db, "transcation"));

      const data = querySnapShort.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()

      }))

      setTransactions(data);
    } catch (error) {
      
    }
  })

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home add={add} transactions={transactions} />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ResetPassword/>}/>
          <Route path="*" element={<NoPageFound />} />
          <Route path="/currencyconverter" element={<CurrencyConvert />} />
          
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
