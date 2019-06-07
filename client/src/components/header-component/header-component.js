import React from 'react'
import './header-component.css'
import logo from '../../assets/images/logo.svg';
class HeaderComp extends React.Component {
    render() {
        return (
            <div className='main-header'>
                <img src={logo} className="header-logo" alt="logo" />
                <h1 className='h1-head'> THE LOGO</h1>
                <ul className='nav'>
                    <li><a href='/home' className='home'>Home</a></li>
                    <li><a href='/products' className='prod'>Products</a></li>
                    <li><a href='/farms' className='farms'>Farms</a></li>
                    <li><a href='/news' className='news'>News</a></li>
                    <li><a href='/contact' className='contact'>Contact</a></li>
                    <li><a href='/login' className='sign-in'>Sign In</a></li>
                </ul>
            </div>
        )
    }
}

export default HeaderComp