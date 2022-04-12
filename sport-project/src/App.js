import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './comps/main/Footer';
import Main from './comps/main/Main';
import MainNav from './comps/main/MainNav';

function App() {
  return (
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
  );
}

export default App;
