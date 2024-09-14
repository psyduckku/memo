import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import List from '../components/List';
import {CalendarContext,CalendarProvider} from '../components/CalendarContext.tsx'; //추가

export default function Main() {
    const [isEditing, setIsEditing] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [list, setList] = useState([]);
    const navigate = useNavigate();
    const {calendarValue} = useContext(CalendarContext);

    useEffect(() => {
        /* 여기서 분기가 필요. 칼렌더에서 onChange이벤트 발생시 해당 날짜의 데이터만 받아오도록 해야함 */
        /*  */
        const jsonStringArr = Object.entries(localStorage);

        const sortedArr = jsonStringArr.sort((prev,next) => {
            const dataA = new Date(prev[0]);
            const dataB = new Date(next[0]);

            return dataB - dataA;
        });
        //map은 해당 map의 각 요소에 대해서 콜백함수를 실행함.
        const parsedData = sortedArr.map(([key, value]) => {
            try {
                const parsedValue = JSON.parse(value);
                return {key, value : parsedValue}
            } catch (e) {
                return {key, value : null};
            }
        });
        setList(parsedData);
        console.log(calendarValue);
    },[calendarValue])

    const handleBack = () => {
        alert('뒤로가기 버튼 클릭');
    };
    const handleEditToggle = () => {
        setIsEditing((prevState) => !prevState);
        if(isEditing===true && selectedItem){
            localStorage.removeItem(selectedItem);
            setList(preList => preList.filter(item => item.key !== selectedItem));
            setSelectedItem(null);
            alert('항목이 삭제되었습니다.');
        }
    }
    const goCal = () => {
        navigate('/myCalendar');
    }
    const handleSelect = (key) => {
        setSelectedItem(key);
    }

    return (
        <>
                <Header onBack={handleBack} onEdit={handleEditToggle} isEditing={isEditing} cal={goCal} />
                {/* <MyCalendar/> */}
                <List list={list} onItemSelect={handleSelect} isEditing={isEditing} clickDate={calendarValue}/> {/*selectedDate추가*/}
                {/* MyCalendar.tsx에서 전달 받은 날짜만 출력되도록함 */}
        </>

    )
}
