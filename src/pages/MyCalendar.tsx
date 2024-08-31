import 'react-calendar/dist/Calendar.css';
import React, {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function MyCalendar(){
    const [calendarValue, setCalendarValue] = useState<Value>(new Date());

    useEffect(() => {
        const keys = Object.keys(localStorage);
        console.log(keys);
    }, []);
        
    

    // value 에 이벤트를 발생시킴

        // console.log(moment().format('YYYY.MM.DD'));
        // formatLongDate={(locale, date) => moment(date).format("YYYY-MM-DD")} //Calendar 속성. 해당 포멧으로 반환함
    return(
        <div>
            <Calendar onChange={(setCalendarValue, event) =>{alert(setCalendarValue)}} value={calendarValue} formatDay={(locale, date) => moment(date).format("D")}
            calendarType='gregory' maxDate={new Date()}
            tileContent = {({date, view}) => 
                {
                    if(view === 'month') {
                        const dateKey = date.toLocaleDateString('sv-SE');
                        const entries = Object.entries(localStorage);
                        const matchingMemos = entries
                        .filter(([key, value]) => key.startsWith(dateKey)) //dateKey가 포함되어있을 경우 true
                        .map(([key, value]) => JSON.parse(value)); // true에 해당하는 것들만 map에 담음
                        return matchingMemos.length > 0 ? <p>📝</p> : null; //length가 0이상인 것만 아이콘 출력
                    }
                    return null;
                }
            } 
            // view === 'month' && date.getDay() === 0 ? <p>{`${date.toISOString().slice(0,10)}`}</p> : null

            // localStorage의 key에 date의 utf가 포함되어있으면?
            />
            {/* 이전 이후, 전/후년도의 데이터 받기 */}
            {/* onChange 이벤트에서 localStorage 내역을 item.get()하기 */}
        </div>
        //메모 데이터를 저장할 때의 날짜 == setCalendarValue가 일치해야함. moment로 가공
        //tile에 기록해놓은 내용이 표시되어야함.
    );
};

export default MyCalendar;