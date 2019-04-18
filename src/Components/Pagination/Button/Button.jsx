import React from 'react';

const Button = props => (
  <div>
    <button onClick={e => props.handleClick(e)}>{props.currentPage}</button>
  </div>
);

export default Button;
