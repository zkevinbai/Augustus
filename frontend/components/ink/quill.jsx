import ReactQuill from 'react-quill';

import React from 'react';
class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            note_title: '',
            note_body: '',
            notebook_id: parseInt(this.props.match.params.id)
        };
        
        this.quillRef = null;
        this.reactQuillRef = null;

        this.handleChange = this.handleChange.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.createNote = this.createNote.bind(this);

        this.attachQuillRefs = this.attachQuillRefs.bind(this);
        this.modules = {
            toolbar: [
                [{ 'font': [] }, { 'header': [1, 2, 3, false] }, {'color': []}, {'background': []}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
                [{ 'align': [] }, { 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                ['link', 'image', 'video'],
            ]
        };
        this.formats = [
            'header', 'font', 'size',
            'bold', 'italic', 'underline', 'strike',
            'blockquote', 'code-block',
            'list', 'bullet', 'indent',
            'link', 'image', 'color', 'background', 'align'
        ];
    }

    componentDidMount() {
        this.attachQuillRefs();

        this.props.fetchNotes().then(
            () => {
                this.setState(
                    {
                        id: this.props.note.id,
                        note_title: this.props.note.note_title,
                        note_body: (this.props.note.note_body)
                    }
                );
            }
        );
    }

    componentDidUpdate(prevProps) {
        this.attachQuillRefs();

        if (prevProps.match.params.id !== this.props.match.params.id) {
            console.log("the notebook was changed");
            this.setState({
                notebook_id: parseInt(this.props.match.params.id)
            });
        }

        if (prevProps.match.params.noteId !== this.props.match.params.noteId){
            this.props.fetchNotes().then(
                () => {
                    this.setState(
                        {
                            id: this.props.note.id,
                            note_title: this.props.note.note_title,
                            note_body: (this.props.note.note_body)
                        }
                    );
                    console.log("component was updated");
                    console.log(this.state);
                }
            );
        }
        console.log(this.state);
    }

    componentWillUnmount(){
        this.createNote();
    }

    attachQuillRefs() {
        // Ensure React-Quill reference is available:
        if (typeof this.reactQuillRef.getEditor !== 'function') return;
        // Skip if Quill reference is defined:
        if (this.quillRef != null) return;

        const quillRef = this.reactQuillRef.getEditor();
        if (quillRef != null) this.quillRef = quillRef;
    }

    handleTitle(e) {
        this.setState({ note_title: e.target.value });
    }

    handleChange(content, delta, source, editor) {
        this.setState({ note_body: content });
        console.log("on change triggered");
    }

    createNote(){
        if (this.props.match.params.noteId){
            console.log("edit note");
            this.setState({
                id: parseInt(this.props.match.params.noteId)
            });
            this.setState({ note_body: (this.state.note_body) });
            this.props.updateNote(this.state);
        } else {
            console.log("create note");
            this.setState({note_body: (this.state.note_body)});
            this.props.createNote(this.state).then(resNote => {
                this.props.history.replace(`${this.props.history.location.pathname + `/note/${resNote.note.id}`}`);
            });
        }
    }

    render() {
        return (
            <div className="quill-scroll-container">
                <div className="c-main-nav">
                    <input 
                        className="quill-title"
                        type="text"
                        placeholder={'Title'}
                        value={
                            this.state?
                                this.state.note_title :
                                ""
                        }
                        onChange={this.handleTitle}
                        onBlur={this.submitTitle}
                    />
                    <i className="fas fa-save"
                        onClick={this.createNote}
                    ></i>
                </div>
                <ReactQuill
                    ref={(el) => { this.reactQuillRef = el }}
                    theme={'snow'}

                    value = {
                        (this.state.note_body)
                    }
                    onChange={this.handleChange}

                    modules={this.modules}
                    formats={this.formats}
                />
            </div>
        )
    }
}

export default Editor;