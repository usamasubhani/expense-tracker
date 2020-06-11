import React from 'react';
import './App.css';
// Components
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses'
import TransactionsList from './components/TransactionsList'
import NewTransaction from './components/NewTransaction'
// Contex
import { GlobalProvider } from './context/GlobalContext'

function App() {
  return (
    <GlobalProvider>
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
