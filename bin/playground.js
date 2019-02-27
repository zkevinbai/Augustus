import { logout } from "../frontend/util/session_api_util";

// #########################################################################
    // ---------------------------TESTING START-----------------------------

// Window AJAX -------------------------------------------------------------
// Sign Up
$.ajax({
    type: "POST",
    url: "api/users",
    data: {
        user: {
            username: "k2",
            email: "k2@k2.com",
            password: "password"
        }
    }
}).then((res) => console.log(res));

// Delete Account
$.ajax({
    type: "DELETE",
    url: "api/users/2",
}).then((res) => console.log(res));

// Sign In
$.ajax({
    type: "POST",
    url: "api/session",
    data: {
        user: {
            // credential: "kevin",
            credential: "kev@kev.com",
            password: "password"
        }
    }
}).then((res) => console.log(res));

// Sign Out
$.ajax({
    type: "DELETE",
    url: "api/session"
}).then((res) => console.log(res));

// Ajax Console Testing
let k2 = {
    username: "k2",
    email: "k2@k2.com",
    password: "password"
};

signup(k2).then((res) => console.log(res));

logout().then((res) => console.log(res));

let k2login = {
    credential: "k2",
    password: "password"
};

login(k2login).then((res) => console.log(res));sl

let k2delete = {
    id: 5
};

deleteAccount(k2delete).then((res) => console.log(res)); sl
// Window Actions ----------------------------------------------------------

signup(k2)(dispatch);

login(k2login)(dispatch);

logout()(dispatch);

deleteAccount(k2delete)(dispatch);