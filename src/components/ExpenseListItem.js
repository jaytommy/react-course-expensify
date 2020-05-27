// Render description, amount, createdAt
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral'

// Destructure props to three components 
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        Amount: {numeral(amount / 100).format('$0,0.00')}
        
        Created: {moment(createdAt).format('MMMM Do, YYYY')}
      </p>
  </div>
);

export default ExpenseListItem;