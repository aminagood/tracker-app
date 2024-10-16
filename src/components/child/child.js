'use client'
import React, { useContext, useState } from 'react'
import './child.css';
import { TransactionContext } from '@/components/transationContext';

const Child = () => {

  let { transactions, addTransaction, deleteTransaction } = useContext(TransactionContext)
  let [newDesc, setDesc] = useState('');
  let [newAmount, setAmount] = useState(0);
  // let [delltran, settran] = useState('');


  const handleAddition = (event) => {
    event.preventDefault();
    if (Number(newAmount) === 0) {
      alert('please enter correct value');
      return false;
    }

    addTransaction({
      amount: Number(newAmount),
      desc: newDesc
    });
    setDesc('');
    setAmount(0);
  }

  

// deleteTransaction({

// })






  const getIncome = () => {
    let income = 0;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0)
        income = income + transactions[i].amount

    }
    return income;
  }

  const getExpense = () => {
    let expence = 0;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0)
        expence += transactions[i].amount

    }
    return expence;
  }

  // console.log(transactions);

  return (
    <div className='container'>
      <h1 className='text-center'>Expense Tracker</h1>
      <h3 className='bln' >Your Balance <br />{getIncome() + getExpense()}</h3>

      <div className='expence-container'>
        <h3 className='select'>INCOME <br /> {getIncome()}</h3>
        <h3 className='select'>Expense <br />{getExpense()}</h3>
      </div>

      <h3 className='his'>History</h3>
      <hr />

      <ul className='transation-list'>
        {transactions.map((tranObj, ind) => {

          return (<li key={ind}>

            <button className='btn-c' onClick={() => deleteTransaction(tranObj.id)}>X</button>

            <span>{tranObj.desc}</span>
            <span>{tranObj.amount}</span>

          </li>
          )
        })}
      </ul>
      <h3 className='new'>Add new transation</h3>
      <hr />
      {/* creating form */}
      <form className='form' onSubmit={handleAddition}>
        <label>
          Enter Description <br />
          <input value={newDesc} placeholder='Description' type='text' onChange={(ev) => setDesc(ev.target.value)} required />
        </label>
        <br />
        <label>
          Enter Amount <br />
          <input value={newAmount} placeholder='Amount' type='number' onChange={(ev) => setAmount(ev.target.value)} required />
        </label>
        <br />
        <input className='add' type='submit' value="Add transation" />

      </form>

    </div>
  )
}

export default Child;
