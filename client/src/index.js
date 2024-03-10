import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import Home from './home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Admin from './admin';
import ChangePassword from './changepassword';
import About from './About';
import Plan from './Plan';


function Website(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/home' element={<Home/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/Plan' element={<Plan/>} />
        <Route path='/changepassword' element={<ChangePassword/>} />
      </Routes>
    </BrowserRouter>

    // <div className='full-height'>
    //   <Home/>
    //   <Login/>
    // </div>
  );
}

ReactDOM.render(<Website/>, document.getElementById('root'));