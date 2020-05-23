// Render description, amount, createdAt
import React from 'react';
import { Link } from 'react-router-dom';

// Destructure props to three components 
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>Amount: {amount} Created: {createdAt}</p>
  </div>
);

export default ExpenseListItem;