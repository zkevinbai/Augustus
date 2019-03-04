// #############################################################################
    // ---------------------------TESTING START---------------------------------

// Window variables ------------------------------------------------------------

    let note1 = {
        notebook_title: "test",
        user_id: 11
    };
    let note1 = {
        notebook_title: "test",
    };

    // let updatenote1 = {
    //     id: 7, //Change as needed
    //     notebook_title: "testUpdate",
    //     user_id: 11
    // };

    let updatenote1 = {
        id: 900, //Change as needed
        notebook_title: "testUpdate",
    };

    let notedelete = {
        id: 2 //Change as needed
    };
 
// Window AJAX -----------------------------------------------------------------

    // // Notebooks Index
    // $.ajax({
    //     type: "GET",
    //     url: "api/notebooks",
    // }).then((res) => console.log(res));

    // // Notebook Show
    // $.ajax({
    //     type: "GET",
    //     url: `api/notebooks/${1}`,
    // }).then((res) => console.log(res));

    // // Create Notebook
    // $.ajax({
    //     type: "POST",
    //     url: "api/notebooks",
    //     data: {
    //         notebook: {
    //             notebook_title: "test",
    //             user_id: 1
    //         }
    //     }
    // }).then((res) => console.log(res));

    // // Update Notebook
    // $.ajax({
    //     type: "PATCH",
    //     url: `api/notebooks/${2}`,
    //     data: {
    //         notebook: {
    //             notebook_title: "test-update",
    //             user_id: 1
    //         }
    //     }
    // }).then((res) => console.log(res));

    // // Delete Notebook
    // $.ajax({
    //     type: "DELETE",
    //     url: `api/notebooks/${3}`,
    // }).then((res) => console.log(res));

// Window API Testing ----------------------------------------------------------

    // notebooksIndex().then((res) => console.log(res));
    
    // notebookShow(1).then((res) => console.log(res));

    // createNotebook(note1).then((res) => console.log(res));

    // updateNotebook(updatenote1).then((res) => console.log(res));

    // deleteNotebook(4).then((res) => console.log(res));

// Window Actions Testing ------------------------------------------------------

    notebooksIndex()(dispatch);

    // notebookShow(1)(dispatch); note necessary

    createNotebook(note1)(dispatch);

    updateNotebook(updatenote1)(dispatch);
    // you only need to pass up the thing 

    deleteNotebook(21)(dispatch);
