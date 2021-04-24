import React from 'react';
import loginImg from "./Lin.jpg";
import {Link} from 'react-router-dom'

export class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <div className="base-container">
            <div className="login-header"></div>
            <div className="content">
                <div className="image">
                  <img src={loginImg} /> 
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Doctor Name: Weile Lin</label> 
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Work Experience: 0 year</label> 
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Website: Nope </label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contact Information: 911 </label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Location: My home </label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Description:  </label>
                    </div>

                </div>
                
                <Link to='/doctor' className="login-buttom">
                <button type="button" className="btn">Go Back</button>
                </Link>
            </div>   
        </div>
        
    }



}