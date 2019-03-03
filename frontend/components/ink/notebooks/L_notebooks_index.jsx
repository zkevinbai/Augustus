import React from 'react';
import { Link } from 'react-router-dom';

class LeftNotebooksIndex extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.notebooks.map( notebook => {
                    return(
                    <Link to={"/notebooks"} >
                        dog
                    </Link>
                    )
                })}
            </div>
        )
    }
}

export default LeftNotebooksIndex;