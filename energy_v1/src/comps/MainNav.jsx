import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <header className='App-header'>
      <Link to='/'>
        <button>Home-button</button>
      </Link>
      <Link to='/youtube'>
        <button>Youtube-button</button>
      </Link>
      <Link to='/quiz'>
        <button>Quiz-button</button>
      </Link>
    </header>
  );
};

export default MainNav;
