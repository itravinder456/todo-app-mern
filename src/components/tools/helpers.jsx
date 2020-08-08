import axios from "axios";
import { createBrowserHistory } from "history";
import { decryptData, encryptData } from "./EncryptDecrypt";
import config from "./config";

const hostName = config.BASE_URL;
const SESSION_KEY_NAME = config.SESSION_KEY_NAME;
let headers = {};

export const history = createBrowserHistory();
export const restApiCall = async (url, method, reqObject) => {
  let responseData;

  const config = {
    method: "post",
    url: url,
    data: reqObject,
  };
  await axios(config)
    .then((result) => {
      responseData = result.data;
    })
    .catch((error) => {
      if (error == "Network Error") {
      } else {
      }
    });

  console.log("kansjkdasjkdns", responseData);
  return responseData;
};

// Get all getbased service calls.
export async function getServiceCALLS(serviceURI, dataObject = {}) {
  // Session validation
  const user = getCacheObject(config.SESSION_KEY_NAME);

  if (user) {
    headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${user.token}`,
      userId: user.userId,
    };
  }

  const prepareURL = hostName + serviceURI;
  var tempResponseObject = {};
  tempResponseObject = await axios({
    method: "GET",
    url: prepareURL,
    headers: headers,
    params: {
      format: "json",
    },
  }).then((response) => {
    console.log("API Response Object (Get Service Call)=", response.data);
    return response.data;
  });
  return tempResponseObject;
}

// Get all post based service calls.
export async function postServiceCALLS(serviceURI, dataObject = {}) {
  // Session validation
  const user = getCacheObject(SESSION_KEY_NAME);

  if (serviceURI != "/user/login" || serviceURI != "/register") {
    if (user) {
      headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.token}`,
        userId: user.userId,
      };
    }
  }
  const prepareURL = hostName + serviceURI;
  var tempResponseObject = {};
  console.log(
    "prepareURL =",
    prepareURL,
    "headers=",
    headers,
    "dataObject=",
    dataObject
  );
  tempResponseObject = await axios
    .post(prepareURL, dataObject, {
      headers: headers,
    })
    .then((response) => {
      console.log("API Response Object (Post Service Call)=", response.data);

      var responsedata = response.data;

      return response.data;
    });

  return tempResponseObject;
}

/**
 * @desciption
 * To check user athentication status for protected routes
 */
export function checkSession() {
  let user = getCacheObject(config.SESSION_KEY_NAME);
  if (user) {
    return true;
  } else {
    return false;
  }
}
/**
 * @description
 * to remove currest user session
 */
export function removeSession() {
  // localStorage.removeItem(SESSION_KEY_NAME);
  localStorage.clear();
}

/**
 * @set cache object
 */
export function setCacheObject(key_name, value) {
  localStorage.setItem(key_name, encryptData(value));
  return true;
}

/**
 * @get cache object
 */
export function getCacheObject(key_name) {
  let data = localStorage.getItem(key_name);
  data = data ? decryptData(data) : null;
  return data;
}
/**
 * @description to get distinct values from array
 * @array
 * @property_name
 */
export function getDistinctValuesFromArray(array, property_name) {
  return [...new Set(array.map((object) => object[property_name]))];
}

/**
 * To filter the Objects based on unique id
 * array = array of object
 * comparingProperty = Specific KEY from the array
 * value = Specific value from thje specific KEY
 */
export function getFilteredObjects(array, comparingProperty, value) {
  let results = array.filter((object) => {
    return object[comparingProperty] == value;
  });
  return results;
}
/**
 *
 * @param {to make capitalize the First Letter from the string} string
 */
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 *  Global Search is useful to search string and numbers over all ARRAY of OBJECTS
 *  search string is not null
 */
export function globalSearch(data, searchString = "") {
  if (searchString != "" && data.length > 0) {
    let filtered = data.filter((entry) =>
      Object.values(entry).some(
        (val) =>
          (typeof val !== "string" && val !== null
            ? (val = val.toString())
            : val) && val.toLowerCase().includes(searchString.toLowerCase())
      )
    );
    return filtered;
  }
  return data;
}

/**
 * To move scroll position to top at any time
 */
export function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
/**
 *
 * @param {the array of value tobe checked for duplicates} array
 */
export function checkDuplicateValuesFromArray(array) {
  let duplicates = array.filter((e, i, a) => a.indexOf(e) !== i); // return duplicates
  let unique = array.filter((e, i, a) => a.indexOf(e) === i); // [1, 2, 3, 4]
  let resultArray = {};
  resultArray.unique = unique;
  resultArray.duplicates = duplicates;
  return resultArray;
}

/**
 * @param validationFileds{the fields to be validated} object
 * @param validationState{the state that validation should be performed on} object
 */
export function validateForm(validationState, validationFileds) {
  let formIsValid = true;
  let errors = {};
  for (var name in validationFileds) {
    if (!validationState[name]) {
      formIsValid = false;
      errors[name] = "This field i required";
    } else {
      errors[name] = "";
    }
  }
  return { formIsValid, errors };
}

// export const toggleTheme=()=>{
//         let iTypeTheme = document.getElementById("iTypeTheme");
//         if (iTypeTheme.getAttribute("href") == "light-mode.css") {
//           iTypeTheme.href = "darkTheme.css";
//         } else {
//           iTypeTheme.href = "lightTheme.css";
//         }
// }

// <div className="page-wrapper default-theme sidebar-bg bg1 ">
// <nav id="sidebar" className="sidebar-wrapper">
//   <div className="sidebar-content">
//     {/* sidebar-brand  */}
//     <div className="sidebar-item sidebar-brand">
//       <a href="#">pro sidebar</a>
//     </div>
//     {/* sidebar-header  */}
//     <div className="sidebar-item sidebar-header d-flex flex-nowrap">
//       <div className="user-pic">
//         <img className="img-responsive img-rounded" src="img/user.jpg" alt="User picture" />
//       </div>
//       <div className="user-info">
//         <span className="user-name">Jhon
//         <strong>Smith</strong>
//         </span>
//         <span className="user-role">Administrator</span>
//         <span className="user-status">
//           <i className="fa fa-circle" />
//           <span>Online</span>
//         </span>
//       </div>
//     </div>
//     {/* sidebar-search  */}
//     <div className="sidebar-item sidebar-search">
//       <div>
//         <div className="input-group">
//           <input type="text" className="form-control search-menu" placeholder="Search..." />
//           <div className="input-group-append">
//             <span className="input-group-text">
//               <i className="fa fa-search" aria-hidden="true" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* sidebar-menu  */}
//     <div className=" sidebar-item sidebar-menu">
//       <ul>
//         <li className="header-menu">
//           <span>General</span>
//         </li>
//         <li className="sidebar-dropdown">
//           <a href="#">
//             <i className="fa fa-tachometer-alt" />
//             <span className="menu-text">Dashboard</span>
//             <span className="badge badge-pill badge-warning">New</span>
//           </a>
//           <div className="sidebar-submenu">
//             <ul>
//               <li>
//                 <a href="#">Dashboard 1
//                 <span className="badge badge-pill badge-success">Pro</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">Dashboard 2</a>
//               </li>
//               <li>
//                 <a href="#">Dashboard 3</a>
//               </li>
//             </ul>
//           </div>
//         </li>
//         <li className="sidebar-dropdown">
//           <a href="#">
//             <i className="fa fa-shopping-cart" />
//             <span className="menu-text">E-commerce</span>
//             <span className="badge badge-pill badge-danger">3</span>
//           </a>
//           <div className="sidebar-submenu">
//             <ul>
//               <li>
//                 <a href="#">Products
//               </a>
//               </li>
//               <li>
//                 <a href="#">Orders</a>
//               </li>
//               <li>
//                 <a href="#">Credit cart</a>
//               </li>
//             </ul>
//           </div>
//         </li>
//         <li className="sidebar-dropdown">
//           <a href="#">
//             <i className="far fa-gem" />
//             <span className="menu-text">Components</span>
//           </a>
//           <div className="sidebar-submenu">
//             <ul>
//               <li>
//                 <a href="#">General</a>
//               </li>
//               <li>
//                 <a href="#">Panels</a>
//               </li>
//               <li>
//                 <a href="#">Tables</a>
//               </li>
//               <li>
//                 <a href="#">Icons</a>
//               </li>
//               <li>
//                 <a href="#">Forms</a>
//               </li>
//             </ul>
//           </div>
//         </li>
//         <li className="sidebar-dropdown">
//           <a href="#">
//             <i className="fa fa-chart-line" />
//             <span className="menu-text">Charts</span>
//           </a>
//           <div className="sidebar-submenu">
//             <ul>
//               <li>
//                 <a href="#">Pie chart</a>
//               </li>
//               <li>
//                 <a href="#">Line chart</a>
//               </li>
//               <li>
//                 <a href="#">Bar chart</a>
//               </li>
//               <li>
//                 <a href="#">Histogram</a>
//               </li>
//             </ul>
//           </div>
//         </li>
//         <li className="sidebar-dropdown">
//           <a href="#">
//             <i className="fa fa-globe" />
//             <span className="menu-text">Maps</span>
//           </a>
//           <div className="sidebar-submenu">
//             <ul>
//               <li>
//                 <a href="#">Google maps</a>
//               </li>
//               <li>
//                 <a href="#">Open street map</a>
//               </li>
//             </ul>
//           </div>
//         </li>
//         <li className="header-menu">
//           <span>Extra</span>
//         </li>
//         <li>
//           <a href="#">
//             <i className="fa fa-book" />
//             <span className="menu-text">Documentation</span>
//             <span className="badge badge-pill badge-primary">Beta</span>
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <i className="fa fa-calendar" />
//             <span className="menu-text">Calendar</span>
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <i className="fa fa-folder" />
//             <span className="menu-text">Examples</span>
//           </a>
//         </li>
//       </ul>
//     </div>
//     {/* sidebar-menu  */}
//   </div>
//   {/* sidebar-footer  */}
//   <div className="sidebar-footer">
//     <div className="dropdown">
//       <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//         <i className="fa fa-bell" />
//         <span className="badge badge-pill badge-warning notification">3</span>
//       </a>
//       <div className="dropdown-menu notifications" aria-labelledby="dropdownMenuMessage">
//         <div className="notifications-header">
//           <i className="fa fa-bell" />
//         Notifications
//       </div>
//         <div className="dropdown-divider" />
//         <a className="dropdown-item" href="#">
//           <div className="notification-content">
//             <div className="icon">
//               <i className="fas fa-check text-success border border-success" />
//             </div>
//             <div className="content">
//               <div className="notification-detail">Lorem ipsum dolor sit amet consectetur adipisicing
//               elit. In totam explicabo</div>
//               <div className="notification-time">
//                 6 minutes ago
//             </div>
//             </div>
//           </div>
//         </a>
//         <a className="dropdown-item" href="#">
//           <div className="notification-content">
//             <div className="icon">
//               <i className="fas fa-exclamation text-info border border-info" />
//             </div>
//             <div className="content">
//               <div className="notification-detail">Lorem ipsum dolor sit amet consectetur adipisicing
//               elit. In totam explicabo</div>
//               <div className="notification-time">
//                 Today
//             </div>
//             </div>
//           </div>
//         </a>
//         <a className="dropdown-item" href="#">
//           <div className="notification-content">
//             <div className="icon">
//               <i className="fas fa-exclamation-triangle text-warning border border-warning" />
//             </div>
//             <div className="content">
//               <div className="notification-detail">Lorem ipsum dolor sit amet consectetur adipisicing
//               elit. In totam explicabo</div>
//               <div className="notification-time">
//                 Yesterday
//             </div>
//             </div>
//           </div>
//         </a>
//         <div className="dropdown-divider" />
//         <a className="dropdown-item text-center" href="#">View all notifications</a>
//       </div>
//     </div>
//     <div className="dropdown">
//       <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//         <i className="fa fa-envelope" />
//         <span className="badge badge-pill badge-success notification">7</span>
//       </a>
//       <div className="dropdown-menu messages" aria-labelledby="dropdownMenuMessage">
//         <div className="messages-header">
//           <i className="fa fa-envelope" />
//         Messages
//       </div>
//         <div className="dropdown-divider" />
//         <a className="dropdown-item" href="#">
//           <div className="message-content">
//             <div className="pic">
//               <img src="img/user.jpg" alt="" />
//             </div>
//             <div className="content">
//               <div className="message-title">
//                 <strong> Jhon doe</strong>
//               </div>
//               <div className="message-detail">Lorem ipsum dolor sit amet consectetur adipisicing
//               elit. In totam explicabo</div>
//             </div>
//           </div>
//         </a>
//         <a className="dropdown-item" href="#">
//           <div className="message-content">
//             <div className="pic">
//               <img src="img/user.jpg" alt="" />
//             </div>
//             <div className="content">
//               <div className="message-title">
//                 <strong> Jhon doe</strong>
//               </div>
//               <div className="message-detail">Lorem ipsum dolor sit amet consectetur adipisicing
//               elit. In totam explicabo</div>
//             </div>
//           </div>
//         </a>
//         <a className="dropdown-item" href="#">
//           <div className="message-content">
//             <div className="pic">
//               <img src="img/user.jpg" alt="" />
//             </div>
//             <div className="content">
//               <div className="message-title">
//                 <strong> Jhon doe</strong>
//               </div>
//               <div className="message-detail">Lorem ipsum dolor sit amet consectetur adipisicing
//               elit. In totam explicabo</div>
//             </div>
//           </div>
//         </a>
//         <div className="dropdown-divider" />
//         <a className="dropdown-item text-center" href="#">View all messages</a>
//       </div>
//     </div>
//     <div className="dropdown">
//       <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//         <i className="fa fa-cog" />
//         <span className="badge-sonar" />
//       </a>
//       <div className="dropdown-menu" aria-labelledby="dropdownMenuMessage">
//         <a className="dropdown-item" href="#">My profile</a>
//         <a className="dropdown-item" href="#">Help</a>
//         <a className="dropdown-item" href="#">Setting</a>
//       </div>
//     </div>
//     <div>
//       <a href="#">
//         <i className="fa fa-power-off" />
//       </a>
//     </div>
//     <div className="pinned-footer">
//       <a href="#">
//         <i className="fas fa-ellipsis-h" />
//       </a>
//     </div>
//   </div>
// </nav>
// {/* page-content  */}

// <main className="page-content pt-2">
//   <div id="overlay" className="overlay" />

//   <div className="container-fluid mtn8">
//     <div className="col-md-12 mainWrapper">
//       <div className="navbarFixed col-md-12">
//         <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark navbarNew">

//         <div id="toggle-sidebar" className="cursor-Pointer toggleMenuBar btn btn-secondary rounded-0 nav-icon1" >
//           <div className="MenuPointer">

//             <span></span>
//             <span></span>
//             <span></span>
//           </div>

//         </div>

//         <div className="headTitle"><span>iT</span>yper</div>
//         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon"></span>
//         </button>

//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav mr-auto align-items-center fs-14">
//             <li class="nav-item active">
//               <a class="nav-link" href="#">
//                 <i class="fa fa-home fs-18"></i>
// Home
// <span class="sr-only">(current)</span>
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">
//                 <i class="fa fa-envelope-o">
//                   <span class="badge badge-danger">11</span>
//                 </i>
// Link
// </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link disabled" href="#">
//                 <i class="fa fa-envelope-o">
//                   <span class="badge badge-warning">11</span>
//                 </i>
// Disabled
// </a>
//             </li>
//             <li class="nav-item dropdown">
//               <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 <i class="fa fa-envelope-o">
//                   <span class="badge badge-primary">11</span>
//                 </i>
// Dropdown
// </a>
//               <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <a class="dropdown-item" href="#">Action</a>
//                 <a class="dropdown-item" href="#">Another action</a>
//                 <div class="dropdown-divider"></div>
//                 <a class="dropdown-item" href="#">Something else here</a>
//               </div>
//             </li>
//           </ul>
//           <ul class="navbar-nav ">
//             <li class="nav-item">
//               <a class="nav-link" href="#">
//                 <i class="fa fa-bell fs-18">
//                   <span class="badge badge-info">11</span>
//                 </i>
// Test
// </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">
//                 <i class="fa fa-globe fs-18">
//                   <span class="badge badge-success">11</span>
//                 </i>
// Test
// </a>
//             </li>
//           </ul>
//           <div class="width20">
//             <input class="width100p form-control mr-sm-2 searchInp" type="text" placeholder="Search" aria-label="Search" />
//             {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
//           </div>
//         </div>
//       </nav>

//       </div>

//       <div className="row">
//         <div className="form-group col-md-12">
//           <h2>Pro Sidebar</h2>
//           <p>This is a responsive sidebar template with dropdown menu based on bootstrap framework.</p>
//         </div>
//         <div className="form-group col-md-12">
//           <iframe src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=star&count=true&size=small" frameBorder={0} scrolling={0} width="100px" height="30px" />
//           <iframe src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=fork&count=true&size=small" frameBorder={0} scrolling={0} width="100px" height="30px" />
//         </div>
//         <div className="form-group col-md-12">
//           <a id="toggle-sidebar" className="btn btn-secondary rounded-0" href="#">
//             <span>Toggle Sidebar</span>
//           </a>
//           <a id="pin-sidebar" className="btn btn-outline-secondary rounded-0" href="#">
//             <span>Pin Sidebar</span>
//           </a>
//         </div>
//       </div>
//       <hr />
//       <div className="row">
//         <div className="form-group col-md-12">
//           <h3>Themes</h3>
//           <p>Here are more themes that you can use</p>
//         </div>
//       </div>
//       <div className="row">
//         <div className="form-group col-md-12">
//           <a href="#" data-theme="default-theme" className="theme default-theme selected" />
//           <a href="#" data-theme="chiller-theme" className="theme chiller-theme" />
//           <a href="#" data-theme="legacy-theme" className="theme legacy-theme" />
//           <a href="#" data-theme="ice-theme" className="theme ice-theme" />
//           <a href="#" data-theme="cool-theme" className="theme cool-theme" />
//           <a href="#" data-theme="light-theme" className="theme light-theme" />
//         </div>
//         <div className="form-group col-md-12">
//           <p>You can also use background image </p>
//         </div>
//         <div className="form-group col-md-12">
//           <a href="#" data-bg="bg1" className="theme theme-bg selected" />
//           <a href="#" data-bg="bg2" className="theme theme-bg" />
//           <a href="#" data-bg="bg3" className="theme theme-bg" />
//           <a href="#" data-bg="bg4" className="theme theme-bg" />
//         </div>
//         <div className="form-group col-md-12">
//           <div className="custom-control custom-switch">
//             <input type="checkbox" className="custom-control-input" id="toggle-bg" defaultChecked />
//             <label className="custom-control-label" htmlFor="toggle-bg">Background image</label>
//           </div>
//         </div>
//         <div className="form-group col-md-12">
//           <div className="custom-control custom-switch">
//             <input type="checkbox" className="custom-control-input" id="toggle-border-radius" />
//             <label className="custom-control-label" htmlFor="toggle-border-radius">Border radius</label>
//           </div>
//         </div>
//       </div>
//       <hr />
//       <div className="row ">
//         <div className="form-group col-md-12">
//           <small>Made with <i className="fa fa-heart text-danger" aria-hidden="true" /> by <span className="text-secondary font-weight-bold">Mohamed
//           Azouaoui</span></small>
//         </div>
//         <div className="form-group col-md-12">
//           <a href="https://github.com/azouaoui-med" target="_blank" className="btn btn-sm bg-secondary shadow-sm rounded-0 text-light mr-3 mb-3">
//             <i className="fab fa-github" aria-hidden="true" />
//           </a>
//           <a href="https://twitter.com/azouaoui_med" target="_blank" className="btn btn-sm bg-secondary shadow-sm rounded-0 text-light mr-3 mb-3">
//             <i className="fab fa-twitter" aria-hidden="true" />
//           </a>
//           <a href="https://www.instagram.com/azouaoui_med/" target="_blank" className="btn btn-sm bg-secondary shadow-sm rounded-0 text-light mr-3 mb-3">
//             <i className="fab fa-instagram" aria-hidden="true" />
//           </a>
//           <a href="https://www.linkedin.com/in/mohamed-azouaoui/" target="_blank" className="btn btn-sm bg-secondary shadow-sm rounded-0 text-light mr-3 mb-3">
//             <i className="fab fa-linkedin-in" aria-hidden="true" />
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>

// </main>

// </div>

// filterByValue=(array, string)=> {
//     return array.filter(o =>
//               Object.keys(o).some(k => {
//                 console.log("gghhfghfhfhfuygyu",k,o)
//                 o[k].toLowerCase().includes(string.toLowerCase())}));
//    }
