import ReactQuill from 'react-quill';
import React from 'react';
class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = props.note;

        this.quillRef = null;
        this.reactQuillRef = null;
        this.handleChange = this.handleChange.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.submitTitle = this.submitTitle.bind(this);
        this.createNote = this.createNote.bind(this);

        this.attachQuillRefs = this.attachQuillRefs.bind(this);
        this.modules = {
            toolbar: [
                [{ 'font': [] }, { 'header': [1, 2, 3, false] }, { 'color': [] }, { 'background': [] }],
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

    componentDidMount(){
        debugger
        this.attachQuillRefs();
        this.props.notesIndex();
    }

    componentDidUpdate(){
        this.attachQuillRefs();
        console.log(this.state);
    }

    componentWillUnmount() {
        this.props.createNote(this.state).then(resNote => {
            this.props.history.replace(`${this.props.history.location.pathname + `/note/${resNote.note.id}`}`);
        });
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
        console.log(this.state);
    }

    handleChange(html) {
        this.setState({ note_body: this.quillRef.getText() });
        console.log(this.state);
    }

    submitTitle() {
        console.log(`write a function to submit this later`);
    }

    createNote() {
        this.props.updateNote(this.state);
    }

    render() {
        return (
            <div className="quill-scroll-container" >
                <div className="c-main-nav">
                    <input
                        className="quill-title"
                        type="text"
                        placeholder={'Title'}
                        value={this.state.note_title}
                        onChange={this.handleTitle}
                        onBlur={this.submitTitle}
                    />
                </div>
                <ReactQuill
                    onBlur={this.createNote}

                    ref={(el) => { this.reactQuillRef = el }}
                    theme={'snow'}
                    onChange={this.handleChange}
                    placeholder={this.props.placeholder}
                    modules={this.modules}
                    formats={this.formats}
                />
            </div>
        )
    }
}

export default Editor;

// onBlur = {(e) => this.setState({ title: e.target.value })}
// on = {(e) => this.setState({ title: e.target.value })}
