import ReactQuill from 'react-quill';
import React from 'react';
class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            body: ''
        };
        this.notebookId = parseInt(this.props.match.params.id);
        
        this.quillRef = null;
        this.reactQuillRef = null;
        this.handleChange = this.handleChange.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.submitTitle = this.submitTitle.bind(this);

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
        debugger
    }

    componentDidUpdate() {
        this.attachQuillRefs();
        if (!this.notebooks){
            this.notebooks = Object.values(this.props.notebooks);
        } else if (this.notebooks.length === 1 && !this.state.notebook_id) {
            this.setState({
                notebook_id: this.notebooks[0].id
            });
        }
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
        this.setState({ title: e.target.value });
        console.log(this.state); 
    }

    handleChange() {
        this.setState({ body: this.quillRef.getContents() });
        console.log(this.state);
        debugger
    }

    submitTitle(){
        // console.log(this.state.title);
        console.log(`write a function to submit this later`);
    }

    render() {
        return (
            <div className="quill-scroll-container" >
                <div className="c-main-nav">
                    <input 
                        className="quill-title"
                        type="text"
                        value={this.state.title}
                        placeholder={'Title'}
                        onChange={this.handleTitle}
                        onBlur={this.submitTitle}
                    />
                </div>
                <ReactQuill
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
