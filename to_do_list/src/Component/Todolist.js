import React, { createElement } from "react";

class ToDoList extends React .Component{
    state = {
      TODO_LS:"ToDo",
      toDos: []
    };

    saveToDo = () =>{
        localStorage.setItem(this.state.TODO_LS,JSON.stringify(this.state.toDos));
    }

    eachPaint = (toDo) =>{
        this.paintToDo(toDo.text)
    }

    loadToDo = () =>{
        const loadToDos = localStorage.getItem(this.state.TODO_LS);
        if(loadToDos !== null){
            const paintToDos = JSON.parse(loadToDos);
            paintToDos.forEach(this.eachPaint);
        }
    }

    paintToDo = (text) => {
        const ul = document.querySelector("ul");
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.innerText = text;
        li.appendChild(span);
        ul.appendChild(li);
        const toDoObj = {
            text
        }
        this.state.toDos.push(toDoObj);
        this.saveToDo();
    }

    init = () =>{
        this.loadToDo();
    }

    submit = (event) =>{
        event.preventDefault()
        const input = document.querySelector("input");
        const text = input.value;
        this.paintToDo(text);
        input.value = "";
    }
    
    
    render(){
      return(
        <>  
            {this.init()}
            <form onSubmit={this.submit}>
                <input type="text" placeholder="ToDoList"  />
            </form>
            <ul>

            </ul>
        </>
      )
    }
  }

export default ToDoList;