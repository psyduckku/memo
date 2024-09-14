import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import EditHead from '../components/EditHead';

export default function DetailPage(){
    const [memoData, setMemoData] = useState({value : ['','']});  //js객체를 생성함
    const [isEditing, setIsEditing] = useState(false);
    const {paramKey} = useParams();
    const navigate = useNavigate();
    console.log(`가져온 paramKey : ${paramKey}`);
    //localStorage가 아닌 Main list 가져오기
    useEffect(() => {
        const storedMemo = JSON.parse(localStorage.getItem(paramKey))//JSON문자열로 저장되어있던 것을 JS객체로 변환함
        if(storedMemo){
            setMemoData(storedMemo)
        }
    }, [paramKey])


    const back = () =>{
        navigate('/');
    }

    const toggleBtn = () => {
        if(isEditing===true){
            // save()
            const confirm = window.confirm('변경된 내용을 저장하시겠습니까?');
            if(confirm===true){
                save();
                return;
            }
            return;
        }
        setIsEditing(!isEditing);
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setMemoData(prevData => ({
            ...prevData,
            [name] : value
        }));
        //name은 input의 name을 말함. input에 name이 없다면 자곧ㅇ하지 않음.

    };

    const save = () => {
        //localStorage에 있는 데이터를 수정하는 명령어
        localStorage.setItem(paramKey, JSON.stringify(memoData));
        setIsEditing(!isEditing);
    }
    
    return (
        <>
                <EditHead onBack= {back} onEdit={toggleBtn} isEditing={isEditing} />
                <div>
                <input placeholder="제목입력" value={memoData.title || ''} name="title"
                    readOnly={!isEditing} onChange={handleInputChange}
                ></input>
                </div>
                <div>
                <textarea cols="150" rows="40" placeholder="내용입력" value={memoData.content || ''} name="content"
                readOnly={!isEditing} onChange={handleInputChange}></textarea>
                </div>
        </>
    )
    

}