import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';
import CustomInput from '../components/CustomInput';

function Signup() {

  return (
    <>
      <Meta title="Sign Up" />
      <BreadCrumb title="Sign Up" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Create Account</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="text" name="name" placeholder="Name" />

                <CustomInput type="email" name="email" placeholder="Email" />

                <CustomInput type="tel" name="mobile" placeholder="Mobile Number" />

                <CustomInput type="password" name="password" placeholder="Password" className="mt-1" />
          
                <div>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                    <button className="button border-0">Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup