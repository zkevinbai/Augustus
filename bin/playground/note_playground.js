// #############################################################################
// ---------------------------TESTING START---------------------------------

// Window variables ------------------------------------------------------------

let note1 = {
    note_title: "test",
    note_body: "test body",
    notebook_id: 11
};

let note1 = {
    note_title: "test",
    note_body: "test body",
    notebook_id: 11
};

let updatenote1 = {
    id: 7, //Change as needed
    notebook_title: "testUpdate",
};

let updatenote1 = {
    id: 900, //Change as needed
    notebook_title: "testUpdate",
};

let notedelete = {
    id: 2 //Change as needed
};

// Window AJAX -----------------------------------------------------------------

// // Note Index
$.ajax({
    type: "GET",
    url: "api/notes",
}).then((res) => console.log(res));

// Note Show
$.ajax({
    type: "GET",
    url: `api/notes/${1}`,
}).then((res) => console.log(res));

// Create Note
$.ajax({
    type: "POST",
    url: "api/notes",
    data: {
        note: {
            note_title: "testDelete",
            note_body: "testbody",
            notebook_id: 54,
        }
    }
}).then((res) => console.log(res));

// Update Note
$.ajax({
    type: "PATCH",
    url: `api/notes/${4}`,
    data: {
        note: {
            note_title: "testUpdate",
        }
    }
}).then((res) => console.log(res));

// Delete Note
$.ajax({
    type: "DELETE",
    url: `api/notes/${4}`,
}).then((res) => console.log(res));

// Window API Testing ----------------------------------------------------------

// noteIndex().then((res) => console.log(res));

// noteShow(1).then((res) => console.log(res));

// createNotebook(note1).then((res) => console.log(res));

// updateNotebook(updatenote1).then((res) => console.log(res));

// deleteNotebook(4).then((res) => console.log(res));

// Window Actions Testing ------------------------------------------------------

// noteIndex()(dispatch);

// notehow(1)(dispatch); note necessary

// createNotebook(note1)(dispatch);

// updateNotebook(updatenote1)(dispatch);
// you only need to pass up the thing you want to change

// deleteNotebook(21)(dispatch);
