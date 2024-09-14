import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import DetailPage from './pages/DetailPage';
import WritePage from './pages/WritePage';
import MyCalendar from './pages/MyCalendar.tsx';
import {CalendarProvider} from './components/CalendarContext.tsx';

const Router = () => {
    return (
        <BrowserRouter> 
        <CalendarProvider>
            <Routes>
                <Route path="/" exact element={<Main/>}/>
                <Route path="/detailPage/:paramKey" element={<DetailPage/>}/>
                <Route path="/writePage" element={<WritePage/>} />
                <Route path="/myCalendar" element={<MyCalendar/>}/>
            </Routes>
        </CalendarProvider> 
        </BrowserRouter>
    )
}
export default Router;