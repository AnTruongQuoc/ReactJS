import React from 'react'
import HeaderComp from '../../components/header-component/header-component'
import FooterComp from '../../components/footer-component/footer-component'
import MainRouter from '../../routers';
import BodyComp from '../../components/body-component/body-component';
import IMGlogin from '../../assets/images/salad.jpg'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const axios = require('axios');

class LoginPage extends React.Component {
    constructor() {
        super()
        this.state = {
            response: 'Something'
        }

    }
    componentDidMount() {
        let self = this
        axios.get('http://localhost:4000/api/hello')
            .then(function (response) {
                // handle success
                console.log(response);
                let els = response.data.members.map((key, index) => {
                    return (
                        <li key={index}>{key.name} - {key.class}</li>
                    )
                })
                self.setState({
                    response: els
                })
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
                <script src="https://unpkg.com/react/umd/react.production.js" crossorigin />

                <script
                    src="https://unpkg.com/react-dom/umd/react-dom.production.js"
                    crossorigin
                />

                <script
                    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                    crossorigin
                />

                <script>var Alert = ReactBootstrap.Alert;</script>
                <div class="w-100">
                    <div class="w-50 d-inline-block">
                        <div class="w-25 p-2">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicChecbox">
                                    <Form.Check type="checkbox" label="Keep me log in" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form>
                        </div>
                    </div>
                    <div class="w-50 d-inline-block">
                        <img src={IMGlogin} alt='Salad'></img>
                    </div>
                </div>
                <FooterComp></FooterComp>
            </React.Fragment>
        )
    }
}

export default LoginPage