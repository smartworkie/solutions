import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Components
import './App.css';
import Faq from './component/Faq'
import Header from './component/Header';
import Header1 from './component/Header1';
import Home from './component/Home';
import Footer from './component/Footer';
import Login from './component/Login';
import Signup from './component/Signup';
import Account from './component/Account';
import Forgot from './component/Forgot';
import PasswordChange from './component/PassChange';
import Reset from './component/Reset';
import Activate from './component/Activate';
import About from './component/About';
import Privacy from './component/Privacy';
import Payment from './component/Payment';
import Sample from './component/Sample';
import {UserProvider} from './context';

 const App = () => {
  return (
    
<div className='App'>

 <Router>
 <UserProvider>
  <Header/>
   <Header1/>
 <Routes>
  <Route path='/solutions' element = {<Home/>}/>
  <Route path='/login' element = {<Login/>}/>
  <Route path='/signup' element = {<Signup/>}/>
  <Route path='/account' element ={<Account/>} />
  <Route path='/forgot' element = {<Forgot/>}/>
  <Route path='/about'element ={<About/>}/>
  <Route path='/passwordchange' element = {<PasswordChange/>}/>
  <Route path='/activate/:token' element = {<Activate/>}/>
  <Route path='/reset/:resetLink' element = {<Reset/>}/>
  <Route path = '/faq' element = {<Faq/>} />
  <Route path='/payment' element = {<Payment/>}/>
  <Route path='/privacy' element ={<Privacy/>}/>
  <Route path='/sample' element = {<Sample/>}/>
  </Routes>
   <Footer/>
   </UserProvider>
   </Router>
   
   </div>
  
  );
  
}

export default App;
