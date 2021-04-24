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
                </ul>
            </div>
        </div>

        <Link to='/DoctorPreferences' className="login-buttom">
                <button type="button" className="btn">Redo Preferences</button>
         </Link>

    </div>
        )
    }



}