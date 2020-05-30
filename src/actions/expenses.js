import database from '../firebase/firebase';

/* Originally we had the action generator return an object.  Now using Firebase,
we change to have it return a function.  Then the component will dispacth the function.
The function will then run with the ability to dispatch other actions including the
Firebase write calls.
*/

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '', 
      note = '', 
      amount = 0, 
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    
    return database.ref('expenses').push(expense)
      .then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }));
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
type: 'REMOVE_EXPENSE',
id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
type: 'EDIT_EXPENSE',
id,
updates
});