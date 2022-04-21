import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainNav from './comps/MainNav';
import Quiz from './comps/Quiz';
import Youtube from './comps/Youtube';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <MainNav />
        <Routes>
          <Route path='/youtube' element={<Youtube />}></Route>
          <Route path='/quiz' element={<Quiz />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

/*
<BrowserRouter>
      <div className='App'>
        <MainNav />
        <Routes>
          <Route path='/path' element={<MainNav />}></Route>
        </Routes>
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
*/

export default App;
