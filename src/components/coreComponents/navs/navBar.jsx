import React, { Component } from "react";
import SideBar from "./sideBar";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    navFlag: false,
  };
  render() {
    return (
      <>
        <div className="navbarFixed">
          <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
            <div
              id="toggle-sidebar"
              className="cursor-Pointer toggleMenuBar btn btn-secondary rounded-0 nav-icon1"
            >
              <div className="MenuPointer">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="headTitle">Todo's</div>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto align-items-center fs-14">
                <li class="nav-item active">
                  <Link className="nav-link" to="/dashboard">
                    <i class="fa fa-home fs-18"></i>
                    Home
                    <span class="sr-only">(current)</span>
                  </Link>
                  </li>
                
              </ul>
              <ul class="navbar-nav ">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fa fa-bell fs-18">
                      <span class="badge badge-info">11</span>
                    </i>
                    Test
                  </a>
                </li>
               
              </ul>
              <div class="width20">
                <input
                  class="width100p form-control mr-sm-2 searchInp"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}
