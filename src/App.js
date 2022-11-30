import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Menu from './components/Menu';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/country' element={<CountryList />}></Route>
        <Route path='/country/:name' element={<CountryDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
