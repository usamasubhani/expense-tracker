import React from 'react';
import './App.css';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses'
import TransactionsList from './components/TransactionsList'
import NewTransaction from './components/NewTransaction'
function App() {
  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <Balance />
      <IncomeExpenses />
      <TransactionsList />
      <NewTransaction />
    </div>
  );
}

export default App;
