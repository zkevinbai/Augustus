import React from 'react';
import { Link } from 'react-router-dom';

class LeftNotebooksIndex extends React.Component {
    constructor(props) {
        super(props);
        this.createNotebookModal = this.createNotebookModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchNotebooks();
    }

    createNotebookModal(){
        this.props.history.push('/notebook/new');
    }

    render() {
        return (
            <div className={`mr-NotebooksIndex`}>
                <div className={`mr-NotebooksIndex-heading`}>
                    <h1>Notebooks</h1>
                    <span className="newNotebook"
                        onClick={this.createNotebookModal}
                    >
                        <i className="fas fa-book-medical"></i>
                        <h1>New</h1>
                    </span>
                </div>
                <div className={`mr-NotebooksIndex-categories`}>
                    <h1>Title</h1>
                    <h1>Edit</h1>
                    <h1>Delete</h1>
                </div>
                <div className={`mr-NotebooksIndex-notebooks`}>
                    {this.props.notebooks.map(notebook => (
                        <span key={notebook.id}>
                            <Link to={`/notebook/${notebook.id}`}>
                                <i className="fas fa-book"></i>
                                <h2>{notebook.notebook_title}</h2>
                            </Link>
                            <i className="fas fa-edit notebookEdit"
                            ></i>
                            <i className="fas fa-book-dead notebookDelete"
                                onClick={ () => {
                                    this.props.deleteNotebook(notebook.id)
                                    this.setState({key: "value"})
                                    this.forceUpdate();
                                } }
                            ></i>
                        </span>
                    )
                    )}
                </div>
            </div>
        )
    }
}

export default LeftNotebooksIndex;