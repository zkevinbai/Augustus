import React from 'react';
import { Link } from 'react-router-dom';

class LeftNotebooksIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`mr-NotebooksIndex`}>
                <div className={`mr-NotebooksIndex-heading`}>
                    <h1>Notebooks</h1>
                    <a><h1>New Notebook</h1></a>
                </div>
                <div className={`mr-NotebooksIndex-categories`}>
                    <h1>Title</h1>
                </div>
                <div className={`mr-NotebooksIndex-notebooks`}>
                    {this.props.notebooks.map(notebook => (
                        <Link to={`/notebook/${notebook.id}`} key={notebook.id} >
                            <i className="fas fa-book"></i>
                            <h2>{notebook.notebook_title}</h2>
                        </Link>
                    )
                    )}
                </div>
            </div>
        )
    }
}

export default LeftNotebooksIndex;