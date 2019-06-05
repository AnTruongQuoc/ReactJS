import React from 'react'
import './body-component.css'
import bg from '../../assets/images/ricepaddies.png'
import draflow from '../../assets/images/darkgreen.png'
import flower from '../../assets/images/flower.png'
import blue from '../../assets/images/blue.png'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Cookies from  'universal-cookie'

class BodyComp extends React.Component {
    constructor() {
        super() //Bat buoc
            const cookies= new Cookies();
            cookies.set('myCat', 'AnAn', {path: '/'});
            console.log(cookies.get('isLogin')); //Pacman

        this.state = {
            data: [
                {
                    name: 'An'
                },
                {
                    name: 'Hoang'
                },
                {
                    name: 'Uyen'
                },
                {
                    name: 'Hanh'
                },
                {
                    name: 'Truc'
                },
                {
                    name: 'Mai'
                },
                {
                    name: 'Vinh'
                },
                {
                    name: 'Phuong'
                },
                {
                    name: 'Son'
                },
            ]
        }
        console.log(this.state.data)
    }
    render() {
        return (
            <div className='body'>
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
            <script src="holder.js"></script>




                <div className='bg-top'>
                    <div className='bg-top-text'>
                        <h1 className='rice'>Rice</h1>
                        <h1 className='paddy'>Paddies</h1>
                        <h2 className='vn'>viet nam</h2>
                        
                    </div>
                    <h1 className='rice-under'>rice</h1>
                    <div className='line'></div>
                    <div className='line-down'></div>
                    <p className='bg-text'>
                        " Welcome to my website. 
                        If you're planning to go to VN, visiting one of these places... "    
                    </p>
                    <img src={bg} className='bg'></img>
                    
                </div>
                <div className='lnews'>
                        <h1 className='lnews-text'> latest news</h1>
                        <div className='lnews-ul'></div>
                        <div className='news-box'>
                            <div className='news-box-1'>
                                <img src={draflow} className='image1'></img>
                                <h1 className='title-1'>New Title 1</h1>
                                <p className='text-1'>"Write something here."</p>
                            </div>
                            <div className='news-box-2'>
                                <img src={flower} className='image1'></img>
                                <h1 className='title-1'>New Title 2</h1>
                                <p className='text-1'>"Write something here."</p>
                            </div>
                            <div className='news-box-3'>
                                <img src={blue} className='image1'></img>
                                <h1 className='title-1'>New Title 3</h1>
                                <p className='text-1'>"Write something here."</p>
                            </div>
                        </div>
                </div>
                <div className='subpart'>
                    <div className='test-pos'>
                    <CardGroup>
                        {
                            this.state.data.map((item, index) => {                         
                                return(
                                
                                
                    
                                <Card style={{width: '18rem'}} className='text-center'>
                                <Card.Img variant="top" src="holder.js/100x180" />
                                <Card.Body>
                                <Card.Title class='item-title'>{item.name}</Card.Title>
                                <Card.Text>
                                    Some quick text here. Something that you think it's crazy.
                                </Card.Text>
                                <Button variant="primary" class='item-name'> Button</Button>
                                </Card.Body>
                                </Card>
                        
                                )
                            })   
                        }
                    </CardGroup>
                    </div>

                    
                </div>
            </div>
        )
    }
}

export default BodyComp