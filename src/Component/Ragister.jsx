import React from 'react';
import { NavLink } from 'react-router-dom';

const Ragister = () => {
  return (
    <div className="container">
      <h2 className="mt-5">Create Your <br /> Popx account</h2>
      <form>


        <div className="row">
          <div className="col-lg-4 col-md-6 mt-3">
            <div className="textOnInput">
              <label style={{ color: "blueviolet" }} htmlFor="inputEmail"> Full Name </label>
              <input className="form-control" type="text" id="inputEmail" placeholder="Marry Doe" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 mt-3">
            <div className="textOnInput">
              <label style={{ color: "blueviolet" }} htmlFor="inputPassword"> Phone number</label>
              <input className="form-control" type="password" id="inputPassword" placeholder="Marry Doe" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mt-3">
            <div className="textOnInput">
              <label style={{ color: "blueviolet" }} htmlFor="inputPassword">Email address </label>
              <input className="form-control" type="password" id="inputPassword" placeholder="Marry Doe" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mt-3">
            <div className="textOnInput">
              <label style={{ color: "blueviolet" }} htmlFor="inputPassword">Password</label>
              <input className="form-control" type="password" id="inputPassword" placeholder="Marry Doe" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mt-3">
            <div className="textOnInput">
              <label style={{ color: "blueviolet" }} htmlFor="inputPassword">Company name </label>
              <input className="form-control" type="password" id="inputPassword" placeholder="Marry Doe" />
            </div>
          </div>
        </div>
        <div>
          <p> Are you an agency ?</p>
          <div className="row">
          <div className=" col-md-6 custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
              <label class="custom-control-label" for="customRadioInline1"> Yes </label>
          </div>
          <div className="col-md-6 custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"/>
              <label class="custom-control-label" for="customRadioInline2"> No </label>
          </div>
          </div>
          </div>
          

          <div className="row">
            <div style={{marginTop:"90px"}} className="col-lg-4 col-md-6 ">
              <NavLink to="/Account" style={{ width: "100%" }} className='btn btn-primary'> Create Account </NavLink>
            </div>
          </div>
      </form>
    </div>
  )
}

export default Ragister