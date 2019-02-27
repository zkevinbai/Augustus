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
            credential: "kevin",
            // email: "k2@k2.com",
            password: "password"
        }
    }
}).then((res) => console.log(res));

// Sign Out
$.ajax({
    type: "DELETE",
    url: "api/session"
}).then((res) => console.log(res));

