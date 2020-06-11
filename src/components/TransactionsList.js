import React, { useContext } from 'react';
import Transaction from './Transaction'

import { GlobalContext } from '../context/GlobalContext'

 function TransactionsList() {
    const context = useContext(GlobalContext);
    console.log(context);
    return (
        <div>
            <h3>Transactions</h3>
            <ul className="list">
                <li><Transaction /></li>
                <li><Transaction /></li>
            </ul>
        </div>
    )
}

export default TransactionsList;