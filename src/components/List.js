import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './List.css';

export default function List({onItemSelect, isEditing, list, clickDate}){
    // eslint-disable-next-line
    // const {getRootProps} = useButton();
    console.log('받은 list데이트'+clickDate);

    return (
        <div className="main">
            <div className="memoList">
                {list.map((item, index) => (
                    <div key={index} className="item">
                        <div id="markDiv" style={{visibility: isEditing ? 'visible' : 'hidden'}}>
                            <input type="radio" name="item" 
                            value={item.key} id={`mark_${item.key}`}
                            onChange={() => onItemSelect(item.key)}
                            />

                        </div>
                        <Link to={`/detailPage/${item.key}`} className="title">{item.value.title}</Link>
                        <div className="content">{item.value.content}</div>
                        <div className="date">{item.key} </div>                    
                    </div>
                ))}
            </div>
            <Link className="addBtn" to="/writePage">
            </Link>
        </div>
    )
}