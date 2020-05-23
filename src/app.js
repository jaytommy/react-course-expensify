import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss'; 
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// Water bill
store.dispatch(addExpense({ description: 'Water bill', amount: 12900, createdAt: 150000 }));

// Gas bill
store.dispatch(addExpense({ description: 'Gas bill', amount: 2452, createdAt: 151000 }));

// Other
store.dispatch(addExpense({ description: 'Rent', amount: 109000, createdAt: 152000 }));


// Print visibile
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
    
);

ReactDOM.render(jsx, document.getElementById("app"));