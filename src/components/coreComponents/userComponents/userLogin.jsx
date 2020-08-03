import React,{useReducer} from 'react'
import {connect} from "react-redux"
import {loginUser} from '../../Redux/userActions/user.action'
import userLoginReducer from '../../Redux/userReducers/user.login.reducer'
import {Link} from 'react-router-dom'
  const UserLogin = () => {
      const [user,setUser]=useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            email: '',
            password: ''
        }
      );
      const handleUser=(e,name)=>{
          let value=e.target.value
          setUser({[name]: value});
        }
        const handleSubmite=()=>{

        }
    return (
        <div>
            <div>
                <div className="container">
                    <div className="row pullRight">
                        <div className="col-lg-5 ">
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group"><label className="small mb-1" htmlFor="inputEmailAddress">Email</label><input onChange={(e)=>handleUser(e,"email")} className="form-control py-4" id="inputEmailAddress" type="email" placeholder="Enter email address" /></div>
                                        <div className="form-group"><label className="small mb-1" htmlFor="inputPassword">Password</label><input onChange={(e)=>handleUser(e,"password")}  className="form-control py-4" id="inputPassword" type="password" placeholder="Enter password" /></div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox"><input className="custom-control-input" id="rememberPasswordCheck" type="checkbox" /><label className="custom-control-label" htmlFor="rememberPasswordCheck">Remember password</label></div>
                                        </div>
                                        <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <Link to='/forgotPassword'>Forgot Password? </Link> 
                                        <Link className="btn btn-primary" to='/'> Login</Link> 
    
                                        
                                        
                                      
                                      
                                            </div>
                                    </form>
                                </div>
                                <div className="card-footer text-center">
                                    <div  className="small"> <Link to='/signup'> Need an account? Sign up!</Link></div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
        </div>
        </div>
    )
}

const matStateToprops=(state)=>{
    console.log("abdjasbdabdasdasdask",state.user.state.email)
      return { email:state.user.state.email}

}


    
export default connect(matStateToprops,null)(UserLogin);