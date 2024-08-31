import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './List.css';

export default function List(){
    // eslint-disable-next-line
    let [list, setList] = useState([]);

       useEffect(() => {
        const jsonStringArr = Object.entries(localStorage); // 배열로된 JSON 문자열을 가져옴. 반복문으로 하나씪 풀어줘야함.

        const parsedData = jsonStringArr.map(([key, value]) => {
            try{
                const parsedValue = JSON.parse(value);
                return {key, value : parsedValue}                
            }catch(e){
                return {key, value : null};
            }
        });
        setList(parsedData);
       },[]);

       console.log(list);

    return (
        <div className="main">
            <div className="memoList">
                {list.map((item, index) => (     //map의 파라메터로 item과 index가 뭔지 모르겠다. item은 항목같고, index는 말그대로 item에 저장된 index같은데
                    <div key={index} className="item">
                        <div className="title">{item.value.title}</div>
                        <div className="content">{item.value.content}</div>
                        {/* value에 currentTime을 추가시키기 */}
                        {/* JSON.stringify로 item.value에 있는 title, content를 분리시키기 */}                        
                    </div>
                ))}
            </div>
            <Link className="addBtn" to="/writePage">
            +
            </Link>
        </div>
    )
}