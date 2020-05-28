// Test file
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

// Should return zero for no expenses
test('should return zero for no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});

// Should correctly add up a single expense
test('should correctly add up a single expense', () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toBe(expenses[0].amount);
});


// Should correctly add up multiple expenses
test('should correctly add up a single expense', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(114195);
});