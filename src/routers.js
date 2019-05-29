import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import HomePage from './.pages/home/home'
//import ProductsPage from './pages/products/products'
//import FarmsPage from './pages/farms/farms'

const MainRouter = () => (
    <main>
        <Switch>
            <Route path='/' component='{HomePage}'></Route>
            <Route path='/products' component='{ProductsPage}'></Route>
            <Route path='/farms' component='{FarmsPage}'></Route>
        </Switch>
    </main>
)

export default MainRouter
