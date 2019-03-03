import React from 'react';
import { Link } from 'react-router-dom';

class LeftNotebooksIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchNotebooks();
    }

    render(){
        // debugger
        return(
            <div className="l-NotebooksIndex" >
                {this.props.notebooks.map( notebook => {
                    return(
                    <Link to={`/notebook/${notebook.id}`} >
                        <i class="fas fa-book"></i>                        
                        <h2>{notebook.notebook_title}</h2>
                    </Link>
                    )
                })}
            </div>
        )
    }
}

export default LeftNotebooksIndex;