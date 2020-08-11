import axios from "axios";
import { createBrowserHistory } from "history";
import { decryptData, encryptData } from "./EncryptDecrypt";
import config from "./config";
import $ from "jquery";

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
  console.log("prepareURL =", prepareURL, "headers=", headers);
  tempResponseObject = await axios({
    method: "GET",
    url: prepareURL,
    headers: headers,
    params: {
      format: "json",
    },
  }).then((response) => {
    console.log("API Response Object (Get Service Call)=", response.data);
    if (
      response.data.message == "Auth failed" ||
      response.data.code == "USER_BLOCKED"
    ) {
      removeSession();
    }
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
      if (
        response.data.message == "Auth failed" ||
        response.data.code == "USER_BLOCKED"
      ) {
        removeSession();
      }

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
  window.location.href = "/login";
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
    if (validationState[name] ==="") {
      formIsValid = false;
      errors[name] = "This field i required";
    } else {
      errors[name] = "";
    }
  }
  return { formIsValid, errors };
}
export function JQuery() {

  //toggle sidebar
  $("#toggle-sidebar").click(function () {
    $(".page-wrapper").toggleClass("toggled");
  });
  $(document).ready(function(){
    $('.nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
      $(this).toggleClass('open');
    });
  });
  
  //toggle sidebar overlay
  $("#overlay").click(function () {
    $(".page-wrapper").toggleClass("toggled");
  });
}
