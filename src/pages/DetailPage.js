import {useState} from 'react';
import EditHead from '../components/EditHead';

export default function DetailPage(){
    const [edit, setEdit] = useState(false);

    const toggleBtn = () => {
        setEdit(!edit);
    }
    
    const alarm = () =>{
        alert('옴뫄');
    }

    const title ='';
    
    return (
        <>
            <EditHead onBack= {alarm} onEdit = {toggleBtn} isEditing={edit} />
            <div>
                <input placeholder="제목입력"></input>
            </div>
            <div>
                <textarea cols="150" rows="40" placeholder="내용입력"></textarea>
            </div>
            <button onClick>앙기모띠</button>
            
        </>
    )
    

}