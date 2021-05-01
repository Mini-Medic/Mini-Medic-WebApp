import React from 'react';
import loginImg from "../login/login.svg";

export class Register extends React.Component {

    render(){
        return <div className="base-container">
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                 <img src={loginImg} alt='register'/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="Email" placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder="password"/>
                    </div>
                </div>
                <div className="login-button">
                    <button type="button" className="btn">Register</button>
                </div>
            </div>
        </div>
    }



}