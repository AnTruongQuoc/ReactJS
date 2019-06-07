import React from 'react'
import HeaderComp from '../../components/header-component/header-component'
import FooterComp from '../../components/footer-component/footer-component'
import MainRouter from '../../routers';
import BodyComp from '../../components/body-component/body-component';
import IMGlogin from '../../assets/images/salad.jpg'
const axios = require('axios');

class LoginPage extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:4000/api/hello')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }
    render() {
        return (
            <React.Fragment>
                <HeaderComp></HeaderComp>
                <div className='login'>
                    <form className='lg-form'>
                        <label className='username'>Username</label><br></br>
                        <input type='email'></input><br></br>
                        <label className='password'>Password</label><br></br>
                        <input type='password'></input>
                        <br></br>
                        <br></br>
                        <input type="submit" value="Login" className='lg-btn'></input>
                    </form>
                    <img src={IMGlogin} className='img-lg'></img>
                </div>
                <FooterComp></FooterComp>
            </React.Fragment>
        )
    }
}

export default LoginPage