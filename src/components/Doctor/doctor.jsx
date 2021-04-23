import React from 'react';
import CardItem from "./CardItem";
import './DoctorCard.css'
import { Link } from "react-router-dom"
import pic1 from "./Lin.jpg"
import pic2 from "./Zhou.jpg"
import pic3 from "./doctor.png"
import pic4 from "./strange.png"

export class Doctor extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
        <div className={'cards'} id={'cardgroups'}>
        <h1>Here are doctors that match your preferences:</h1>
        <div className={'cards_container'}>
            <div className={'cards-wrapper'}>
                <ul className={'cards_items'}>
                    <CardItem src={pic1}
                              text={'Doctor Lin'}
                              label={'More info'}
                              path={'/profile1'}
                    />
                    <CardItem src={pic2}
                              text={'Doctor Zhou'}
                              label={'More info'}
                              path={'/'}
                    />
                    <CardItem src={pic3}
                              text={'Doctor Angeli'}
                              label={'More info'}
                              path={'/'}
                    />
                </ul>
                <ul className={'cards_items'}>
                    
                    <CardItem src={pic3}
                              text={'Doctor Jessica'}
                              label={'More info'}
                              path={'/'}
                    />
                    <CardItem src={pic3}
                              text={'Doctor Simmy'}
                              label={'More info'}
                              path={'/'}
                    />
                     <CardItem src={pic4}
                              text={'Doctor Strange'}
                              label={'More info'}
                              path={'/'}
                    />
                </ul>
            </div>
        </div>

        <Link to='/' className="login-buttom">
                <button type="button" className="btn">Redo Preferences</button>
         </Link>

    </div>
        )
    }



}