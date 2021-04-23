import React from 'react';
import {NavButton} from '../navbar/Button';
import './Hero.css';
import '../../../App.css'
import {Link} from 'react-router-dom';
import {Link as Link2} from 'react-scroll';
import Video from '../../../resource/background.mp4'
function Hero() {
    return (
        <>
            <div className='hero-container'>
                <video src={Video} autoPlay loop muted />
                <h1>WELCOME</h1>
                <p>We care about your health !</p>
                <div className={'hero-btns'}>
                    <Link2 activeClass="active" to='cardgroups' spy={true} smooth={true} className='btn-mobile'>
                        <NavButton className={'btns'} buttonStyle={'btn--outline'} buttonSize={'btn--large'}>
                            GET STARTED
                        </NavButton>
                    </Link2>
                    <Link to='/register' className='btn-mobile'>
                        <NavButton className={'btns'} buttonStyle={'btn--primary'} buttonSize={'btn--large'}>
                            Register Account <i className={'far fa-registered'} />
                        </NavButton>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Hero;