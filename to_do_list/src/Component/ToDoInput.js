import React from "react";
import ToDo from './Todo';

const input = document.querySelector("input");
const button = document.querySelector("button");
let TEXT=0; 

function test(){
    console.log("hey");
}

function paint(){
    TEXT = input.value;;
    console.log(input.value);
}

const ToDoInput = (value,onChange, onCreate, onKeyPress)=>{
    return(
        <>
            <div className="form">
                <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
                <div className="create-button" onClick={onCreate}>
                    추가
                </div>
            </div>
        </>
    )
}

export default ToDoInput;