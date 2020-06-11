import React from 'react';

 function Transaction({ transaction }) {
    const sign = transaction.amount > 0 ? '+' : '-';
    return (
        <li className={transaction.amount > 0 ? 'plus' : 'minus'}>{transaction.title}<span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn">x</button></li>
    )
}

export default Transaction;