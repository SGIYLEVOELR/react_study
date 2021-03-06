import React from 'react';
// css 파일
import '../../css/main.css';

import LiveTime from '../custom/LiveTime';

const Main = () => {
  return (
    <div className='body'>
      {/* 로그인, 공지사항,퀵메뉴, 지도 */}
      <div className='main-top'>
        <div className='main-login'>
          <LiveTime />
          <input type='text' placeholder='아이디 입력' />
          <input type='password' placeholder='비밀번호 입력' />
          <button>로그인</button>
        </div>
        <div className='main-notice div-margin'>
          공지사항
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
      </div>
      <div className='main-bottom'>
        <div className='main-div-button'>검색</div>
        <div className='main-div-button'>지도</div>
        <div className='main-div-button'>커뮤니티</div>
      </div>
    </div>
  );
};

export default Main;
