import React from 'react';
import { useState } from 'react';
import Row from './row';
import NewTransaction from './NewTransaction';
import Search from "./Search"


function Transaction({records}) {
  const [stateRecord, setStateRecords] = useState(records);
    const rows = stateRecord.map(data => (
       < Row
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
      <NewTransaction SetData={setStateRecords} />
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