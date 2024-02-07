import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import Navbar from './components/navbar';
import Categories from './components/categoreies';
import Recommend from './components/recommended';
import Topics from './components/topics';
import Popular from './components/popular';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
  <Navbar></Navbar>
  <Categories></Categories>
  <Recommend></Recommend>
  <Topics></Topics>
  <Popular></Popular>
  <Footer></Footer>
 </div>
);
