import React, { createContext, useState, ReactNode } from 'react';

//Context API를 사용하기 위한 인터페이스 및 Context 및 Provider 정의
// Context 데이터구조 정의
interface CalendarContextProps {
    calendarValue: Date | null;
    setCalendarValue : (value: Date | null) => void;
}

//기본값 설정
const defaultContextValue : CalendarContextProps = {
  calendarValue: new Date(),
  setCalendarValue : () => {},
};

//Context 생성
export const CalendarContext = createContext<CalendarContextProps>(defaultContextValue);

// Provider 컴포넌트 정의
// CalendarProvider를 컴포넌트 트리에 적용하지 않았다면 useContext(CalendarContext)로 얻을 수 있는 값은 이전에 정의한 기본값이 됨.
export const CalendarProvider = ({ children }:{ children: ReactNode }) => {
    const [calendarValue, setCalendarValue] = useState<Date | null>(new Date());

    return (
      <CalendarContext.Provider value = {{ calendarValue, setCalendarValue }}> {/* Provider로 감싸서 데이터를 사용 또는 설정해줌 */}
        {children}
      </CalendarContext.Provider>  
    );
};

