import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <p>This is menu</p>
      <Link to='/'>
        <button>Back to Home</button>
      </Link>
    </div>
  );
}
