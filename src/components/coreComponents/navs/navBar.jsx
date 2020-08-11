import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { JQuery } from "../../tools/helpers";

const NavBar = () => {
  const disaptch = useDispatch();
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    JQuery();
  }, []);
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
            <ul class="navbar-nav bellIcon  fs-14">
              <li class="nav-item">
                <a class="nav-link" href="#">
                <div className="icons">
                  <div className="notification">
                    <a href="#">
                    </a><div className="notBtn" href="#"><a href="#">
                        {/*Number supports double digets and automaticly hides itself when there is nothing between divs */}
                        <div className="number">2</div>
                        <i className="fas fa-bell" />
                      </a><div className="box">
                        <a href="#">
                        </a>
                        <div className="display">
                        <div className="cont"><a href="#">{/* Fold this div and try deleting evrything inbetween */}
                            </a><div className="sec new"><a href="#">
                              </a><a href="https://codepen.io/Golez/">
                                <div className="profCont">
                                  {/* <img className="profile" src="https://c1.staticflickr.com/5/4007/4626436851_5629a97f30_b.jpg" /> */}
                                </div>
                                <div className="txt">James liked your post: "Pure css notification box"</div>
                                <div className="txt sub">11/7 - 2:30 pm</div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
                </a>
              </li>
            </ul>
           
          </div>
        </nav>
      </div>
    </>
  );
};


export default NavBar;
