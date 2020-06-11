import React, { useState } from 'react';

 function AddTransaction() {
     const [text, setText] = useState('');
     const [amount, setAmount] = useState();

    return (
        <div>
            <h3>Add Transaction</h3>
            <form>
                <div className="form-control">
                <input type="text" value={text} onChange={(e) => {setText(e.target.value); console.log(text)}} placeholder="Title" />
                </div>
                <div className="form-control">
                <input type="number" value={amount} onChange={(e) => {setAmount(e.target.value)}} placeholder="Amount" />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction;