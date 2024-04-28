
import React,{useEffect, useState} from 'react';
import './App.css';
import Transactions from './components/Transactions';


function App() {
  const [transactions,setTransactions] = useState([])
  useEffect(() =>{
    fetch("")
    .then(r=>r.json())
    .then(transc=>setTransactions(transc))
  },[])
  console.log(transactions)
  
    return (
      <div className="App">
      <header className="App-header">
        <h2>The Royal Bank of Flatiron</h2>
       
      </header>
      <Transactions transactions={transactions}/>
      </div>
      
    );
  }


export default App;
