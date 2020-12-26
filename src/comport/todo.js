import React from "react";
const list=[];
let i=0;

function Sand(){
    list[i]=document.getElementById("todo").value;
    i++;
}

function List({text}){
    <div>
        @{text}@
    </div>
}

function Todo(){
    return(
        <>
           <input type="text" id="todo"/>
           <button onClick={Sand()}>확인</button>
           <List text={list} />
        </>
    )
}

export  default Todo;