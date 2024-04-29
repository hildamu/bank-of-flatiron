import React from 'react';
import { useState } from 'react';

function AddedTransaction({SetData }) {

    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    let addedTransaction = {
      id: Math.floor(Math.random() * 200),
      date: date,
      description: description,
      category: category,
      amount: parseFloat(amount),
    }
    SetData(stateRecords => [...stateRecords, addedTransaction])
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  }

  return (
    <div className='Transaction'>
        <form onSubmit={handleSubmit}>
            <input type="date" required value={date}  name='date'   onChange={(e) => setDate(e.target.value)} />
            <input type="text" required placeholder='Description' name='Description'value={description} onChange={(e) => setDescription(e.target.value)}/>
            <input type="text" required placeholder='Category'    name='category'  onChange={(e) => setCategory(e.target.value)} value={category}/>
            <input type="number" required placeholder='Amount'     name='amount' onChange={(e) => setAmount(e.target.value)}  value={amount}/>
            <button>Add Transaction</button>
        </form>
    </div>
  );
}

export default AddedTransaction;