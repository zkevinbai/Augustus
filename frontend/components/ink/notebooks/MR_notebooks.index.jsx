import React from 'react';
import { Link } from 'react-router-dom';

class LeftNotebooksIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`mr-NotebooksIndex`}>
                {this.props.notebooks.map(notebook => {
                    return (
                        <Link to={`/notebook/${notebook.id}`} key={notebook.id} >
                            <i className="fas fa-book"></i>
                            <h2>{notebook.notebook_title}</h2>
                        </Link>
                    )
                })}
            </div>
        )
    }
}

export default LeftNotebooksIndex;