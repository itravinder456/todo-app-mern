import React, { useReducer, useState } from "react";
import { connect } from "react-redux";
import loginUserRequest from "../../Redux/userActions/user.action";
import userLoginReducer from "../../Redux/userReducers/user.login.reducer";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
  getCacheObject,
  checkSession,
  validateForm,
} from "../../tools/helpers";
import { intiateUserSocketConnection } from "../SocketIO";
const UserLogin = (returnActionReducerObject) => {
  // from here we are taking that main object ok na??
  // wait ///suppose i have called this componet from other component then i have to pass props from that compoent actually,like
  //no need for reduc bro anduke ga
  //anduke akada wrap chesam ipudu anni chil components ye ra provider is parent component which holds global store obj
  // ok naaa//?? i have one mopre doubt ra...wht if we refresh the page...store untunda pothunda
  ///poiddi raa idi same class component lo vunde state elago idik kuda anthee
  // global object ani kaadu refresh cheste reset avtai ade ga ipudu manam face chesindi  aghahhahaha
  // then nuvvuu href vaadinav ga mari akkada kuda login details pothayiga login avvagane
  // aa state tho pani ledu vere reducer file lo raskuntam migata states
  // already we setting cache just login ayye mundu process ki use chesa
  // login ayyaka jariga changes ki custom hooks rasi koreducer pedata
  // because we dont refresh hardly after login ok na adi na plan ok na??okko
  // batikichav brooo thankshaha
  // nenu vasta befor 4pm repu ok naok eelopu inkemina changes vunte because
  // repu redux flow change cheyali ok if want try redux u can malla nenu arrange chestale ok na?okokokok
  // sare ra mari
  // haaa bye mari push chty  thinali veelli ok ra push chesta coomments theesyala or kavala?undanivvu  ok
  const [user, setUser] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      password: "",
      userName: "",
    }
  );
  const [errors, setErrors] = useState({});

  let dispatch = useDispatch();
  const handleUser = (e, name) => {
    let value = e.target.value;
    setUser({ [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let validationFields = {
      password: "",
      userName: "",
    };

    let validateFormResults = validateForm(user, validationFields);
    setErrors(validateFormResults.errors);
    if (!validateFormResults.formIsValid) {
      return false;
    }
    if (user.password !== "" && user.userName !== "") {
      console.log("aslkdmlaskds", returnActionReducerObject);
      dispatch(loginUserRequest(user));
    }
  };

  console.log("clasncksnckcsac", returnActionReducerObject);
  if (checkSession()) {
    intiateUserSocketConnection();
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <div>
        <div className="container">
          <div className="row pullRight">
            <div className="col-lg-5 ">
              <div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className="card-header">
                  <h3 className="text-center font-weight-light my-4">Login</h3>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label className="small mb-1" htmlFor="inputEmailAddress">
                        Username
                      </label>
                      <input
                        onChange={(e) => handleUser(e, "userName")}
                        className={`form-control py-4 ${
                          errors.userName ? "invalid-field" : ""
                        }`}
                        id="inputEmailAddress"
                        type="text"
                        placeholder="Enter email address"
                      />
                    </div>
                    <div className="form-group">
                      <label className="small mb-1" htmlFor="inputPassword">
                        Password
                      </label>
                      <input
                        onChange={(e) => handleUser(e, "password")}
                        className={`form-control py-4 ${
                          errors.password ? "invalid-field" : ""
                        }`}
                        id="inputPassword"
                        type="password"
                        placeholder="Enter password"
                      />
                    </div>
                    {returnActionReducerObject.loginedUser == "fail" ? (
                      <div>
                        <h5 className="text-danger pad10">
                          Username or password is invalid!
                        </h5>
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          id="rememberPasswordCheck"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="rememberPasswordCheck"
                        >
                          Remember password
                        </label>
                      </div>
                    </div>
                    <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                      <Link to="/forgotPassword">Forgot Password? </Link>
                      <Link
                        onClick={handleSubmit}
                        className="btn btn-primary"
                        to="/"
                      >
                        {" "}
                        Login
                      </Link>
                    </div>
                  </form>
                </div>
                <div className="card-footer text-center">
                  <div className="small">
                    {" "}
                    <Link to="/signup"> Need an account? Sign up!</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const matStateToprops = (state) => {
  console.log("cjkasckscnasns", state);
  return { loginedUser: state.user.loginedUser };
};

export default connect(matStateToprops, null)(UserLogin); // this connect is a hoc component

// first parameter is getting state calback, second is setting state call back
// third we have to pass whole current component
// which attached to the root reducer objectok
