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
