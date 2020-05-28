import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

// Snapshot test 1
test('should render ExpenseSummary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={'$235.75'}/>);
  expect(wrapper).toMatchSnapshot();
});

// // Snapshot test 2
test('should render ExpenseSummary with expenses and filters', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={'$1346235.75'}/>);
  expect(wrapper).toMatchSnapshot();
});