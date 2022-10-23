import * as React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor: React.FC = () => {
    const modules = React.useMemo(
        () => ({
            toolbar: {
                container: [
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [{ size: ["small", false, "large", "huge"] }, { color: [] }],
                    [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                        { align: [] },
                    ],
                    ["image", "video"],
                ],
            }
        }), []
    );

    const [contents, setContents] = React.useState('');

    return (
        <div id="EditorContainer">
            <ReactQuill
                value={contents}
                onChange={setContents}
                modules={modules}
                theme='snow'
                placeholder='내용을 입력해주세요.'
            />
        </div>
    )
}

export default Editor;