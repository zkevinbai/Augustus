import * as NotebookApiUtil from "../util/notebook_api_util";

export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";
export const RECEIVE_NOTEBOOK_ERRORS = "RECEIVE_NOTEBOOK_ERRORS";

// Action Creators

export const receiveNotebooks = (notebooks) => ({
    type: RECEIVE_NOTEBOOKS,
    notebooks
});

export const receiveNotebook = (notebook) => ({
    type: RECEIVE_NOTEBOOK,
    notebook
});

export const removeNotebook = (notebookId) => ({
    type: REMOVE_NOTEBOOK,
    notebookId
});

export const receiveNotebookErrors = (notebookErrors) => ({
    type: RECEIVE_NOTEBOOK_ERRORS,
    notebookErrors
});

// Thunk Action Creators

export const notebooksIndex = () => (dispatch) => {
    return NotebookApiUtil.notebooksIndex()
        .then( 
            notebooks => dispatch(receiveNotebooks(notebooks)),
            resErrors => dispatch(receiveNotebookErrors(resErrors))
        );
};

export const notebookShow = (notebookId) => (dispatch) => {
    return NotebookApiUtil.notebookShow(notebookId)
        .then( 
            notebook=> dispatch(receiveNotebook(notebook)),
            resErrors => dispatch(receiveNotebookErrors(resErrors))
        );
};

export const createNotebook = (notebook) => (dispatch) => {
    return NotebookApiUtil.createNotebook(notebook)
        .then( 
            notebook => dispatch(receiveNotebook(notebook)),
            resErrors => dispatch(receiveNotebookErrors(resErrors))
        );
};

export const updateNotebook = (notebook) => (dispatch) => {
    return NotebookApiUtil.updateNotebook(notebook)
        .then( 
            notebook => dispatch(receiveNotebook(notebook)),
            resErrors => dispatch(receiveNotebookErrors(resErrors))
        );
};

export const deleteNotebook = (notebookId) => (dispatch) => {
    return NotebookApiUtil.deleteNotebook(notebookId)
        .then(
            () => dispatch(removeNotebook(notebookId)),
            resErrors => dispatch(receiveNotebookErrors(resErrors))
        );
};