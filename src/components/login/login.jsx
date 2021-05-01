import React from 'react';
import loginImg from "../login/login.svg";

export class Login extends React.Component {

    render(){
        return <div className="base-container">
            <div className="login-header">Login</div>
            <div className="content">
                <div className="image">
                  <img src={loginImg} alt='login'/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder="password"/>
                    </div>
                </div>
                <div className="login-buttom">
                    <button type="button" className="btn">Login</button>
                </div>
            </div>
        </div>
    }



}