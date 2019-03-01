// #############################################################################
    // ---------------------------TESTING START---------------------------------

// Window variables ------------------------------------------------------------

    let notebook = {
        notebook_title: "test",
        user_id: 1
    };

    let notedelete = {
        id: 2 //Change as needed
    };

// Window AJAX -----------------------------------------------------------------

    // Notebooks Index
    $.ajax({
        type: "GET",
        url: "api/notebooks",
    }).then((res) => console.log(res));

    // Notebook Show
    $.ajax({
        type: "GET",
        url: `api/notebooks/${1}`,
    }).then((res) => console.log(res));

    // Create Notebook
    $.ajax({
        type: "POST",
        url: "api/notebooks",
        data: {
            notebook: {
                notebook_title: "test",
                user_id: 1
            }
        }
    }).then((res) => console.log(res));

    // Update Notebook
    $.ajax({
        type: "PATCH",
        url: `api/notebooks/${2}`,
        data: {
            notebook: {
                notebook_title: "test-update",
                user_id: 1
            }
        }
    }).then((res) => console.log(res));

    // Delete Notebook
    $.ajax({
        type: "DELETE",
        url: `api/notebooks/${3}`,
    }).then((res) => console.log(res));


// Window API Testing ----------------------------------------------------------

    // signup(k2).then((res) => console.log(res));

    // logout().then((res) => console.log(res));

    // login(k2login).then((res) => console.log(res));

    // deleteAccount(k2delete).then((res) => console.log(res));

// Window Actions Testing ------------------------------------------------------

    // signup(k2)(dispatch);

    // login(k2login)(dispatch);

    // logout()(dispatch);

    // deleteAccount(k2delete)(dispatch);
