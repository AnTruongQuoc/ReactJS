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
                        <React.Fragment>
                            
                            <tr>
                                <td className ='farms'>
                                    {key.id}
                                </td>
                                <td className ='farms'>
                                    {key.name}
                                </td>
                                <td className ='farms'>
                                    {key.address}
                                </td>
                                <td className ='farms'>
                                    {key.product_id}
                                </td>
                                <td className ='farms'>
                                    {key.owner}
                                </td>
                                <td className ='farms'>
                                    {key.phone}
                                </td>
                            </tr>
                        </React.Fragment>
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
