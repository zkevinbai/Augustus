import React from 'react';
import { Link } from 'react-router-dom';

class MiddleUserNotes extends React.Component {
    constructor(props) {
        super(props);
        this.parseBody = this.parseBody.bind(this);
    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        return (
            <div className="m-allnotes">
                <div className="m-allnotes-header" >
                    <h1>{`${this.props.notebookTitle}`}</h1>
                    <div className="m-allnotes-header-sub">
                        <p>{this.props.notes.length} notes</p>
                    </div>
                </div>
                <div className="m-UserNotes-index">
                    {this.props.notes.reverse().map(note =>(
                        <div className="m-UserNotes-index-item" key={note.id} >
                            <Link to={`/notebook/${note.notebook_id}/note/${note.id}`}>
                                <h2>{note.note_title}</h2>
                                <p>{note.note_body.replace(/<(?:.|\n)*?>/gm, '')}</p>
                            </Link>
                            <i className="fas fa-skull-crossbones"
                                onClick={() => {
                                    this.props.deleteNote(note.id)
                                }}
                            ></i>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default MiddleUserNotes;

{/* <div>
    <h2>{note.note_title}</h2>
    <p>{note.note_body}</p>
</div> */}
// <Link to={`/notebook/${note.notebook_id}/note/${note.id}`} key={note.id} >
{/* <div className={`temp-modal m-UserNotes`}>
    <div className="placeholder"></div>
    <div className="m-UserNotes-index">
        {this.props.notes.map(note =>
            (
                <Link to="" key={note.id}>
                    <h2>{note.note_title}</h2>
                    <p>{note.note_body}</p>
                </Link>
            )
        )}
    </div>
</div> */}