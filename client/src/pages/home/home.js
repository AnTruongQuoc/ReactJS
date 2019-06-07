import React from 'react';
import HeaderComp from '../../components/header-component/header-component'
import FooterComp from '../../components/footer-component/footer-component'
import MainRouter from '../../routers';
import BodyComp from '../../components/body-component/body-component';

class HomePage extends React.Component {
    render() {
        return (
            <div className='homepage'>
                <HeaderComp></HeaderComp>
                <BodyComp></BodyComp>
                <FooterComp></FooterComp>
            </div>
        )
    }
}

export default HomePage