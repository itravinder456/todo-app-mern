import React from 'react'
import {Link} from 'react-router-dom'
const SignUp = () => {
    return (
        <div>
            <div className="welomePage">
            <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
              <div className="card-body">
                <form>
                  <div className="form-row">
                    <div className="col-md-6">
                      <div className="form-group"><label className="small mb-1" htmlFor="inputFirstName">First Name</label><input className="form-control py-4" id="inputFirstName" type="text" placeholder="Enter first name" /></div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group"><label className="small mb-1" htmlFor="inputLastName">Last Name</label><input className="form-control py-4" id="inputLastName" type="text" placeholder="Enter last name" /></div>
                    </div>
                  </div>
                  <div className="form-group"><label className="small mb-1" htmlFor="inputEmailAddress">Email</label><input className="form-control py-4" id="inputEmailAddress" type="email" aria-describedby="emailHelp" placeholder="Enter email address" /></div>
                  <div className="form-row">
                    <div className="col-md-6">
                      <div className="form-group"><label className="small mb-1" htmlFor="inputPassword">Password</label><input className="form-control py-4" id="inputPassword" type="password" placeholder="Enter password" /></div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group"><label className="small mb-1" htmlFor="inputConfirmPassword">Confirm Password</label><input className="form-control py-4" id="inputConfirmPassword" type="password" placeholder="Confirm password" /></div>
                    </div>
                  </div>
                  <div className="form-group mt-4 mb-0"><a className="btn btn-primary btn-block" href="login.html">Create Account</a></div>
                </form>
              </div>
              <div className="card-footer text-center">
                <div className="small"><Link  to='/'> Have an account? Go to login</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div> 
       
  </div>
       
        </div>
    )
}

export default SignUp
