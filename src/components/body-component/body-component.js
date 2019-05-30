import React from 'react'
import './body-component.css'
import bg from '../../assets/images/ricepaddies.png'
class BodyComp extends React.Component {
    render() {
        return (
            <div className='body'>
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
                            <div className='news-box-1'></div>
                            <div className='news-box-2'></div>
                            <div className='news-box-3'></div>
                        </div>
                </div>
            </div>
        )
    }
}

export default BodyComp