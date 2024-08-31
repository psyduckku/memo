import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import List from '../components/List';

export default function Main() {
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    const handleBack = () => {
        alert('뒤로가기 버튼 클릭');
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    }
    
    const goCal = () => {
        navigate('/myCalendar');
    }

    return (
        <>
            <Header onBack={handleBack} onEdit={handleEditToggle} isEditing={isEditing} cal={goCal} />
            <List />
        </>

    )
}
