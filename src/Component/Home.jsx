import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container d-flex flex-column justify-content-end vh-100 "> 
      <div  className="text-center my-auto"> 
      <div>
      <h2>Welcome to PopX</h2>
        <p className="lead">Lorem ipsum dolor sit amet, <br/> consectetur adipisicing elit.</p>
      </div>
        <NavLink to="/Register"style={{ width: "350px" }} className="btn btn-primary mr-2">Create Account</NavLink> <br/>
        <NavLink to="/login"  style={{ backgroundColor: "violet", width: "350px", color: "black", fontWeight: "bold" }} className="btn btn-secondary mt-2">Already Registered? Login</NavLink>
      </div>
    </div>
  );
}

export default Home;
