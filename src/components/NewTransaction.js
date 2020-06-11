import React from 'react';

 function AddTransaction() {
    return (
        <div>
            <h3>Add Transaction</h3>
            <form>
                <div className="form-control">
                <input type="text" placeholder="Title" />
                </div>
                <div className="form-control">
                <input type="number" placeholder="Amount" />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction;