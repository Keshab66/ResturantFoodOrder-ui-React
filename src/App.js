import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/navbar/Navbar';
import Location from './Components/pages/linkpages/Location';
import Menu from './Components/pages/linkpages/Menu';
import Reservation from './Components/pages/linkpages/Reservation';
import Home from './Components/pages/linkpages/Home';
function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar></Navbar>
     <Routes>
     <Route path='*' element={<Home/>}></Route>
     <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Location' element={<Location/>}></Route>
      <Route path='/Menu' element={<Menu/>}></Route>
      <Route path='/Reservation' element={<Reservation/>}></Route>
     </Routes>
     <Footer></Footer>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
