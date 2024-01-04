import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container">
            <h2 className="mt-5">Sign in to your <br /> Popx account</h2>
            <p>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.</p>

            <div className="row">
                <div className="col-lg-4 col-md-6 mt-3">
                    <div className="textOnInput">
                        <label style={{ color: "blueviolet" }} htmlFor="inputEmail">Email Address</label>
                        <input className="form-control" type="text" id="inputEmail" placeholder="Enter email address" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-6 mt-3">
                    <div className="textOnInput">
                        <label style={{ color: "blueviolet" }} htmlFor="inputPassword">Password</label>
                        <input className="form-control" type="password" id="inputPassword" placeholder="Enter password" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-6 mt-3">
                    <NavLink to="/Account" style={{ width: "100%" }} className='btn btn-primary'>Login</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Login;
