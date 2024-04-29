import React from 'react';
import { useState } from 'react';
import Structure from './Structure';
import AddedTransaction from './AddedTransaction';
import Search from './Search'


function Transaction({records}) {
  const [stateRecord, setStateRecords] = useState(records);
    const rows = stateRecord.map(data => (
       < Structure
          key={data.id}
            date={data.date} 
            description={data.description}
            category={data.category}
            amount={data.amount}
            />
    ))
    return (
    <div>
      <Search stateRecords={stateRecord} SetData={setStateRecords} />
      <AddedTransaction SetData={setStateRecords} />
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        </div>
      );
}

export default Transaction;
//indata.description.toLowerCase().includes(searchValue.toLowerCase())