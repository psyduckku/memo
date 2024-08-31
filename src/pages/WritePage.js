import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

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
                <div className="title">
                    <input type="text" style={{width:"90%"}} value={title} 
                        onChange = {(e)=> setTitle(e.target.value)}
                    ></input>
                </div>
                <div className="content" value={content}>
                    <textarea cols="200" rows="30"
                        onChange = {(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
            </div>
            <button onClick={save}>저장</button>
        </>
    );
}