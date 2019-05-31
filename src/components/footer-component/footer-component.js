import React from 'react'
import './footer-component.css'
import pin from '../../assets/images/pinterest.svg'
import insta from '../../assets/images/insta.svg'
import fb from '../../assets/images/fb.svg'
import twitter from '../../assets/images/twitter.svg'

class FooterComp extends React.Component {
    render () {
        return (
            <div className='main-footer'> 
                <footer className='ft-copyright'>
                    <div className='cpright'>
                        <p className='copyright'>
                            © Copyright 2019 The Logo 
                        </p>
                    </div>
                    <div className='fl'>
                        <p className='follow'>
                            follow us
                        </p>
                        
                    </div>
                    <img src={pin} className='pin'></img>
                    <img src={insta} className='ins'></img>
                    <img src={fb} className='fb'></img>
                    <img src={twitter} className='tt'></img>
        
                    
                </footer>
            </div>
        )
    }
}

export default FooterComp