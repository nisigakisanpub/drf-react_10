
import axios from 'axios';

const URL_csrf = "http://127.0.0.1:8000/api/csrf/";
const URL_register = "http://127.0.0.1:8000/api/register/";
const URL_login = "http://127.0.0.1:8000/api/login/";
const URL_logout = "http://127.0.0.1:8000/api/logout/";
const URL_whoami = "http://127.0.0.1:8000/api/whoami/";
const URL_todos = "http://127.0.0.1:8000/todos/";
const URL_Origin = "http://127.0.0.1:3000";

export function APICALL_login(email, password, callbackS, callbackE) {
    console.log("APICALL_login")

    const params = { email: email, password: password };
    axios.defaults.headers = {
        "Content-Type": "application/json",
        // 'X-CSRFToken': csrf,
        "Access-Control-Allow-Origin": URL_Origin,
    }
    axios.defaults.withCredentials = true

    axios.post(URL_login, params)
        .then(response => {
            console.log(response);
            callbackS(response);
        })
        .catch(error => {
            console.log(error);
            callbackE(error);
        });
}

export function APICALL_logout(callbackS, callbackE, csrf) {
    console.log("APICALL_logout")
    console.log("csrf=" + csrf)

    const params = {};
    axios.defaults.headers = {
        "Content-Type": "application/json",
        'X-CSRFToken': csrf,
        "Access-Control-Allow-Origin": URL_Origin,
    }
    axios.defaults.withCredentials = true

    axios.post(URL_logout, params)
        .then(response => {
            console.log(response);
            callbackS(response);
        })
        .catch(error => {
            console.log(error);
            callbackE(error);
        });
}

export function APICALL_whoami(callbackS, callbackE, csrf) {
    csrf=sessionStorage.getItem('mytoken');
    console.log("APICALL_whoami")
    console.log("csrf=" + csrf)

    const params = {};
    axios.defaults.headers = {
        "Content-Type": "application/json",
        'X-CSRFToken': csrf,
        "Access-Control-Allow-Origin": URL_Origin,
    }
    axios.defaults.withCredentials = true

    axios.post(URL_whoami, params)
        .then(response => {
            console.log(response);
            callbackS(response);
        })
        .catch(error => {
            console.log(error);
            callbackE(error);
        });
}

