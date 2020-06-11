import React from 'react';
import './App.css';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses'
import TransactionsList from './components/TransactionsList'
import NewTransaction from './components/NewTransaction'
import { GlobalProvider } from './context/GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <h1>Expense Tracker</h1>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionsList />
        <NewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
