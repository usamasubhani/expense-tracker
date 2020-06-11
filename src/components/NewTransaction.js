import React, { useState, useContext } from 'react';

import { GlobalContext } from '../context/GlobalContext'


 function AddTransaction() {

    const { addTransaction } = useContext(GlobalContext);

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const onSubmit = (e) => {
        e.preventDefault();

        const newTransact = {
            id: Math.ceil(Math.random() * 9999),
            title,
            amount: +amount,
        }

        addTransaction(newTransact);
        console.log(newTransact)
    }

    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder="Title" />
                </div>
                <br/>
                <span className="form-control">
                <input type="number" value={amount} onChange={(e) => {setAmount(e.target.value)}} placeholder="Amount" />
                </span>
                <button className="btn">Add</button>
            </form>
        </div>
    )
}

export default AddTransaction;