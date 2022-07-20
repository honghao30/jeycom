import React from "react";
import CateTitle from "./CateTitle";
import { useState } from 'react';
import './todolist.scss';
import { IoTrashOutline } from "react-icons/io5";
import { IoPencilOutline } from "react-icons/io5";



const TodoList = () => {
    return(
        <div className="totoList__wrap">
            <CateTitle>할일(2개 남음)</CateTitle>            
            <ul  id="todoList">
                <li>
                    <div className="toto-item__wrap">
                        <div className="todo-items">
                            <input type="checkbox" id="todo00" />
                            <label htmlFor="todo00">할일 목록 입니다.</label>
                        </div>
                        <div className="todo-controll">
                            <button type="button" className="btn-remove"><IoTrashOutline/></button>
                            <button type="button" className="btn-modify"><IoPencilOutline/></button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );    
};

export default TodoList;