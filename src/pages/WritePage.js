import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';

export default function WritePage() {
    let [title, setTitle] = useState("");
    let [content, setContent] = useState("");
    let dateKey = new Date().toLocaleString('sv-SE');
    const navigate = useNavigate();

    function save() {
        if(title.length===0 || content.length===0){
            alert('내용을 입력해주세요');
            return
        }
        const memo = {
            title, content
        };

        window.localStorage.setItem(dateKey, JSON.stringify(memo));

        navigate('/');
    };

    return(
        <>
            <div className="body">
                <div>
                    <TextField type="text" id="filled-basic" label="제목을 입력해주세요" variant="filled" fullWidth
                     value={title} onChange = {(e)=> setTitle(e.target.value)}
                    />
                </div>
                <div className="content" value={content}>
                    <TextField id="filled-basic" label="내용을 입력해주세요" variant="filled" fullWidth
                        onChange = {(e) => setContent(e.target.value)}
                    ></TextField>
                </div>
            </div>
            <button onClick={save}>저장</button>
        </>
    );
}