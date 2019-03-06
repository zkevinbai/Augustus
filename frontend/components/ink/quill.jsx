import ReactQuill from 'react-quill';
import React from 'react';
class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorHtml: '' };
        this.quillRef = null;
        this.reactQuillRef = null;
        this.handleChange = this.handleChange.bind(this)
        this.attachQuillRefs = this.attachQuillRefs.bind(this);
        this.modules = {
            toolbar: [
                [{ 'font': [] }, { 'header': [1, 2, 3, false] }, {'color': []}, {'background': []}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
                [{ 'align': [] }, { 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                ['link', 'image', 'video'],
            ],
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
    }

    componentDidUpdate() {
        this.attachQuillRefs();
    }

    attachQuillRefs() {
        // Ensure React-Quill reference is available:
        if (typeof this.reactQuillRef.getEditor !== 'function') return;
        // Skip if Quill reference is defined:
        if (this.quillRef != null) return;

        const quillRef = this.reactQuillRef.getEditor();
        if (quillRef != null) this.quillRef = quillRef;
    }

    handleChange(html) {
        this.setState({ editorHtml: html });
        this.setState({ body: this.quillRef.getContents() });
        console.log(this.state);
    }

    render() {
        return (
            <div className="quill-container" >
                <div className="c-main-nav">
                    Main Nav
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

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
//  */
// Editor.modules = {}
// Editor.modules.toolbar = [
//     ['bold', 'italic', 'underline', 'strike'],       // toggled buttons
//     ['blockquote', 'code-block'],                    // blocks
//     [{ 'header': 1 }, { 'header': 2 }],              // custom button values
//     [{ 'list': 'ordered' }, { 'list': 'bullet' }],    // lists
//     [{ 'script': 'sub' }, { 'script': 'super' }],     // superscript/subscript
//     [{ 'indent': '-1' }, { 'indent': '+1' }],         // outdent/indent
//     [{ 'direction': 'rtl' }],                        // text direction
//     [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
//     [{ 'header': [1, 2, 3, 4, 5, 6, false] }],       // header dropdown
//     [{ 'color': [] }, { 'background': [] }],         // dropdown with defaults
//     [{ 'font': [] }],                                // font family
//     [{ 'align': [] }],                               // text align
//     ['clean'],                                       // remove formatting
// ]

// /* 
//  * Quill editor formats
//  * See https://quilljs.com/docs/formats/
//  */
// Editor.formats = [
//     'header', 'font', 'background', 'color', 'code', 'size',
//     'bold', 'italic', 'underline', 'strike', 'blockquote',
//     'list', 'bullet', 'indent', 'script', 'align', 'direction',
//     'link', 'image', 'code-block', 'formula', 'video'
// ]

// Editor.propTypes = {
//     placeholder: React.PropTypes.string,
// }

{/* <Editor placeholder={'Press button to insert text...'} />, */}
