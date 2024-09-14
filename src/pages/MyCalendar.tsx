import 'react-calendar/dist/Calendar.css';
import React, {useContext} from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import {CalendarContext} from '../components/CalendarContext.tsx';
import {useNavigate} from 'react-router-dom';

// type ValuePiece = Date | null;
// type Value = ValuePiece | [ValuePiece, ValuePiece];

function MyCalendar(){
    //ContextAPI 사용을 위한 useContext
    const {calendarValue, setCalendarValue} = useContext(CalendarContext);

    const navigate = useNavigate();

    const handleDateChange = (date) =>{
        setCalendarValue(date); //클릭한 날짜로 업데이트되어 해당 상태를 사용하는 컴포넌트를 리렌더링
        console.log(`지정변수 : ${date}`);
        navigate("/"); //Main을 호출하면서 해당 이벤트가 
    }

    // useEffect(() => {
    //     const keys = Object.keys(localStorage);
    // }, []);

    return(
        <div>
            <Calendar onChange={ handleDateChange}
                //클릭시 해당 날짜 리스트만 출력
                value={calendarValue} 
                formatDay={(locale, date) => moment(date).format("D")}
                calendarType='gregory' 
                maxDate={new Date()} 
                tileContent = {({date, view}) => {
                    if(view === 'month') {
                        const dateKey = date.toLocaleDateString('sv-SE'); //date에 저장된 날짜를 스웨덴 포맷으로 출력. ex) 2024-09-10 07:42:27
                        // console.log(`날짜 ${dateKey}`); //칼렌더에 표시되는 모든 날짜
                        const entries = Object.entries(localStorage); 
                        const matchingMemos = entries
                        .filter(([key, value]) => key.startsWith(dateKey)) //dateKey가 포함되어있을 경우 true
                        .map(([key, value]) => JSON.parse(value)); // true에 해당하는 것들만 map에 담음
                        return matchingMemos.length > 0 ? <p>📝</p> : null; //length가 0이상인 것만 아이콘 출력
                    }
                    return null;
                }
            }/>
            
        </div>
    );
}

export default MyCalendar;