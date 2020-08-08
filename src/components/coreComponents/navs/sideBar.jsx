import React from "react";
import { Link } from "react-router-dom";
import { removeSession } from "../../tools/helpers";
import { useSelector } from "react-redux";

const SideBar = (props) => {
  const userObject = useSelector((state) => state.user);
  console.log("userObject", userObject);
 
  return (
    <>
      <nav id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-item sidebar-brand">
            <a href="#"></a>
          </div>
          <div className="sidebar-item sidebar-header d-flex flex-nowrap">
            <div className="user-pic">
              <img
                className="img-responsive img-rounded"
                src="img/user.jpg"
                alt="User picture"
              />
            </div>
            <div className="user-info">
              <span className="user-name">
                Jhon
                <strong>Smith</strong>
              </span>
              <span className="user-role">Administrator</span>
              <span className="user-status">
                <i className="fa fa-circle" />
                <span>Online</span>
              </span>
            </div>
          </div>
          <div className="sidebar-item sidebar-search">
            <div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control search-menu"
                  placeholder="Search..."
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fa fa-search" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" sidebar-item sidebar-menu">
            <ul>
              <li className="header-menu">
                <span>General</span>
              </li>
              <li className="sidebar-dropdown">
                <a href="#">
                  <i className="fa fa-tachometer-alt" />
                  <span className="menu-text">Dashboard</span>
                  <span className="badge badge-pill badge-warning">New</span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#">
                        Dashboard 1
                        <span className="badge badge-pill badge-success">
                          Pro
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Dashboard 2</a>
                    </li>
                    <li>
                      <a href="#">Dashboard 3</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <a href="#">
                  <i className="fa fa-shopping-cart" />
                  <span className="menu-text">E-commerce</span>
                  <span className="badge badge-pill badge-danger">3</span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#">Products</a>
                    </li>
                    <li>
                      <a href="#">Orders</a>
                    </li>
                    <li>
                      <a href="#">Credit cart</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <a href="#">
                  <i className="far fa-gem" />
                  <span className="menu-text">Components</span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#">General</a>
                    </li>
                    <li>
                      <a href="#">Panels</a>
                    </li>
                    <li>
                      <a href="#">Tables</a>
                    </li>
                    <li>
                      <a href="#">Icons</a>
                    </li>
                    <li>
                      <a href="#">Forms</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <a href="#">
                  <i className="fa fa-chart-line" />
                  <span className="menu-text">Charts</span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#">Pie chart</a>
                    </li>
                    <li>
                      <a href="#">Line chart</a>
                    </li>
                    <li>
                      <a href="#">Bar chart</a>
                    </li>
                    <li>
                      <a href="#">Histogram</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <a href="#">
                  <i className="fa fa-globe" />
                  <span className="menu-text">Maps</span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#">Google maps</a>
                    </li>
                    <li>
                      <a href="#">Open street map</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="header-menu">
                <span>Extra</span>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-book" />
                  <span className="menu-text">Documentation</span>
                  <span className="badge badge-pill badge-primary">Beta</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-calendar" />
                  <span className="menu-text">Calendar</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-folder" />
                  <span className="menu-text">Examples</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar-footer">
          <div className="dropdown">
            <a
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-bell" />
              <span className="badge badge-pill badge-warning notification">
                3
              </span>
            </a>
            <div
              className="dropdown-menu notifications"
              aria-labelledby="dropdownMenuMessage"
            >
              <div className="notifications-header">
                <i className="fa fa-bell" />
                Notifications
              </div>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                <div className="notification-content">
                  <div className="icon">
                    <i className="fas fa-check text-success border border-success" />
                  </div>
                  <div className="content">
                    <div className="notification-detail">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In totam explicabo
                    </div>
                    <div className="notification-time">6 minutes ago</div>
                  </div>
                </div>
              </a>
              <a className="dropdown-item" href="#">
                <div className="notification-content">
                  <div className="icon">
                    <i className="fas fa-exclamation text-info border border-info" />
                  </div>
                  <div className="content">
                    <div className="notification-detail">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In totam explicabo
                    </div>
                    <div className="notification-time">Today</div>
                  </div>
                </div>
              </a>
              <a className="dropdown-item" href="#">
                <div className="notification-content">
                  <div className="icon">
                    <i className="fas fa-exclamation-triangle text-warning border border-warning" />
                  </div>
                  <div className="content">
                    <div className="notification-detail">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In totam explicabo
                    </div>
                    <div className="notification-time">Yesterday</div>
                  </div>
                </div>
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item text-center" href="#">
                View all notifications
              </a>
            </div>
          </div>
          <div className="dropdown">
            <a
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-envelope" />
              <span className="badge badge-pill badge-success notification">
                7
              </span>
            </a>
            <div
              className="dropdown-menu messages"
              aria-labelledby="dropdownMenuMessage"
            >
              <div className="messages-header">
                <i className="fa fa-envelope" />
                Messages
              </div>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                <div className="message-content">
                  <div className="pic">
                    <img src="img/user.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="message-title">
                      <strong> Jhon doe</strong>
                    </div>
                    <div className="message-detail">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In totam explicabo
                    </div>
                  </div>
                </div>
              </a>
              <a className="dropdown-item" href="#">
                <div className="message-content">
                  <div className="pic">
                    <img src="img/user.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="message-title">
                      <strong> Jhon doe</strong>
                    </div>
                    <div className="message-detail">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In totam explicabo
                    </div>
                  </div>
                </div>
              </a>
              <a className="dropdown-item" href="#">
                <div className="message-content">
                  <div className="pic">
                    <img src="img/user.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="message-title">
                      <strong> Jhon doe</strong>
                    </div>
                    <div className="message-detail">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In totam explicabo
                    </div>
                  </div>
                </div>
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item text-center" href="#">
                View all messages
              </a>
            </div>
          </div>
          <div className="dropdown">
            <a
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-cog" />
              <span className="badge-sonar" />
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="dropdownMenuMessage"
            >
              <a className="dropdown-item" href="#">
                My profile
              </a>
              <a className="dropdown-item" href="#">
                Help
              </a>
              <a className="dropdown-item" href="#">
                Setting
              </a>
            </div>
          </div>
          <div>
            <Link to="/login" onClick={() => removeSession()}>
              <i className="fa fa-power-off" />
            </Link>
          </div>
          <div className="pinned-footer">
            <a href="#">
              <i className="fas fa-ellipsis-h" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
