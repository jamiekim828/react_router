import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/'>home</Link>
      <Link to='/menu'>menu</Link>
      <Link to='/country'>Country List</Link>
    </div>
  );
}
