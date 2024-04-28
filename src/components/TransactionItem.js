import React from 'react';
import './App.css';
import Transaction from './Transaction';


function App() {
  let lists = [
    {id :1 ,date:"2019-12-01" , description:"Paycheck from Bob's Burgers", category:"Income", amount:1000},
    {id:2 , date:"2019-12-01" , description:"South by Southwest Quinea Bowl at Fresh & Co", category:"Food", amount:-10.55},
    {id:3 ,date:"2019-12-02" , description:"South by Southwest Quinea Bowl at Fresh & Co", category:"Food", amount:-10.55},
    {id:4 ,date:"2019-12-04" , description:"Sunglasses, Urban Outfitters", category:"Fashion", amount:-24.99},
    {id:5 ,date:"2019-12-06" , description:"Venmo, Alice Pays you for Burrito", category:"Food", amount:8.75},
    {id:6 ,date:"2019-12-06" , description:"Chipotle", category:"Food", amount:-17.5}
];
  return (
    <div className="App">
      <div className='title'>The Royal Bank of Flatiron</div>
      <Transaction records={lists}/>
    </div>
  );
}

export default App;