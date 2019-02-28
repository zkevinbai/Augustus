import React from 'react';
import { Link } from 'react-router-dom';

const Ink = (props) => {
    return (
        <div className="bars">
            <div className="lbar bar">
                <h1>User Info
                    <button
                        onClick={() => props.logout()}
                        className="navLogout"
                        >Logout
                    </button>
                </h1>
                <h1>Search Bar</h1>
                <h1>Add New Note</h1>
                <ul>
                    <li>Shortcuts</li>
                    <li>All Notes</li>
                    <li>Notebooks</li>
                    <li>Shared with Me</li>
                    <li>Tags</li>
                    <li>Trash</li>
                    <li>Premium</li>
                </ul>
            </div>
            <div className="mbar bar">
                <h1>All Notes</h1>
                <ul>
                    <li>text</li>
                    <li>text</li>
                    <li>text</li>
                    <li>text</li>
                    <li>text</li>
                    <li>text</li>
                    <li>text</li>
                    <li>text</li>
                    <li>text</li>
                </ul>
            </div>
            <div className="content bar">
                <h1>Main Nav</h1>
                <p>
                    content goes here
                </p>
                <h1>Tags</h1>
            </div>
        </div>
    )
};

export default Ink;