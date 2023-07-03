import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import AddTransaction from './Components/add';
import DisplayTransaction from './Components/displayTransaction';
import Home from './Components/home';
import SignUp from './Components/signUp';
import NoPageFound from './Components/noPageFound';
import Login from './Components/login';
import ResetPassword from './Components/forgotPassword';

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

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home add={add} transactions={transactions} />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="*" element={<NoPageFound />} />
          <Route path="/forgotPassword" element={<forgotPassword/>}/>
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
