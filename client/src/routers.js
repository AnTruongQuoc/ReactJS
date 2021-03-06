import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/home'
import LoginPage from './pages/login/login'
//import ProductsPage from './pages/products/products'
import FarmsPage from './pages/farms/farms'
import Auth from './components/auth/auth-component'


const MainRouter = () => (
    <main>
        <Switch>
            <Route exact path='/' render= {
                () => (
                    <Auth orRedirectTo='/login' orRender={
                        <HomePage></HomePage>    
                    }> </Auth>
                )
            }></Route>
            
            <Route path='/products' component='{ProductsPage}'></Route>
            <Route path='/products/:id' component='{ProductDetails}'></Route>
            <Route path='/farms' component={FarmsPage}></Route>
            <Route path='/login' component={LoginPage}></Route>
            <Route path='/home' component={HomePage}></Route>
            <Route path='/' component={HomePage}></Route>
        </Switch>
    </main>
)

export default MainRouter
