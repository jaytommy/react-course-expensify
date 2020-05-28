import React from 'react';
import ExpensesSummary from './ExpensesSummary.js';
import ExpenseList from './ExpenseList.js';
import ExpenseListFilters from './ExpenseListFilters.js';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;