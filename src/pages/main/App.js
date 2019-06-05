import React from 'react';
import logo from '../../assets/images/logo.svg';
import './App.css';
import HeaderComp from '../../components/header-component/header-component'
import FooterComp from '../../components/footer-component/footer-component'
import MainRouter from '../../routers';
import BodyComp from '../../components/body-component/body-component';



function App() {
  return (
    <div className="App">
        <MainRouter></MainRouter>
       <HeaderComp></HeaderComp>
       <BodyComp></BodyComp>
       <FooterComp></FooterComp>
      
    </div>
  );
}

export default App;
