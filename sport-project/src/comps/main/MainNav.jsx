import React from 'react';
import { Link } from 'react-router-dom';
// css 파일
import '../../css/header.css';
// image 파일
import MainLogo from '../../image/Logo.png';

const MainNav = () => {
  return (
    <>
      <header className='App-header'>
        <ul>
          <li>
            <Link to='/user/login'>로그인</Link>
          </li>
          <li>
            <Link to='/user/join'>회원가입</Link>
          </li>
        </ul>
      </header>
      <nav className='main-nav'>
        <ul>
          <li>
            <Link to='/'>
              <img src={MainLogo} className='main-logo' />
            </Link>
          </li>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/search'>검색</Link>
          </li>
          <li>
            <Link to='/qna'>QNA</Link>
          </li>
          <li>
            <Link to='/map'>지도</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainNav;
