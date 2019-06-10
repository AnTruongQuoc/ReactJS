import React from 'react';
import HeaderComp from '../../components/header-component/header-component'
import './farms.css';
const axios = require('axios');


class FarmsPage extends React.Component {
    constructor() {
        super()
        this.state = {
            response: ''
        }

    }
    componentDidMount() {
        let self = this
        axios.get('/api/farms')
            .then(function (response) {
                // handle success
                console.log(response);
                let els = response.data.farms.map((key, index) => {
                    return (
                        <li key={index}>{key.id} - {key.name} - {key.address} - {key.product_id} - {key.owner} - {key.phone}</li>
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
                <div className='farms'>
                    <ul>
                        {
                            this.state.response
                        }
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default FarmsPage
