import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

// Connect to store for:
// -- expenseCount (visible expenses)
// -- expensesTotal

export const ExpensesSummary = ({ expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totalling {expensesTotal}</h1>
    </div>
  );
};


const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: numeral(selectExpensesTotal(visibleExpenses) / 100).format('$0,0.00')
  };
};

export default connect(mapStateToProps)(ExpensesSummary);