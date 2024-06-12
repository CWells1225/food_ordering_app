import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { Home, Checkout, MenuPage } from './pages';
import Profile from './pages/Profile'

function App() {
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/menu_page' element={<MenuPage />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
