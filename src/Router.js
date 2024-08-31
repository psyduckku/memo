import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import DetailPage from './pages/DetailPage';
import WritePage from './pages/WritePage';
import MyCalendar from './pages/MyCalendar.tsx';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Main/>}/>
                <Route path="/detailPage" element={<DetailPage/>}/>
                <Route path="/writePage" element={<WritePage/>} />
                <Route path="/myCalendar" element={<MyCalendar/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;