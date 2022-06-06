import React from 'react';
import { Link } from 'react-router-dom';

const Signinandsignup = () => {
  return (
    <div className='options'>
      <Link className='option' to='/signin'>Sign in</Link>
      <Link className='option' to='/register'>Register</Link>
    </div>
  )
}

export default Signinandsignup;
