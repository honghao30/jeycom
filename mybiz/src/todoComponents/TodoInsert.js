import React from "react";
import { useState } from 'react';
import './todoinstrt.scss';
import { IoClose } from "react-icons/io5";

const TodoInsert = () => {
    const [value,setValue] = React.useState("");
    //const [errorMessage, setErrorMessage] = React.useState('')

    function handleInputChange(e) {
     const userValue = e.target.value;
      setValue(userValue);
      //console.log(userValue)
    }
    function handleSubmit(e){
        e.preventDefault();                
        console.log("니 내 누군지 아니",value)
        if(value === ""){
            alert('할일을 입력 하세요');
            return;
        }
    }

    function onHandleInputClear(e){
        e.preventDefault();   
        console.log("삭제")   
    }
    
    return (
        <div className="todoadd__wrap">
            <div className="todoadd__form">
                <form onSubmit={handleSubmit}>
                    <div className="todoinput__wrap">
                        <input type="text" 
                        name="name"
                        value={value}
                        onChange={handleInputChange}
                        className="input-todo" />
                        <button type="button" className="btn-clear" onClick={onHandleInputClear}><IoClose></IoClose></button>
                    </div>
                    <div className="toto__btn-wrap">
                        <button type="submit" 
                        className="btn-todo-save">
                        할일 추가
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TodoInsert;