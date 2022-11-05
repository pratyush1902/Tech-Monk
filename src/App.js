 import React from 'react'
 import{Routes,Route} from 'react-router-dom';
 import Header from './Componets/Header'
 import Home from './Componets/Home'
 import Footer from './Componets/Fotter'
 import Contact from './Componets/Contact.jsx'
 import './Styling/App.scss';
 import './Styling/Header.scss';
 import './Styling/Home.scss';
 import './Styling/Footer.scss';
 import './Styling/Contact.scss';
 import './Styling/media.scss';

 

 
 export default function App() {
   return (
     <div>
       <Header/>
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
       
     </div>
   )
 }
 