import React from "react"
import TodoItem from "./TodoItem"
function TodoBoard({toPassOverData}){
    return (
        <div>
        <h1> TodoBoard</h1>
         {/* {props.map((props) => <TodoItem props ={props.text} key={props.id}/>)}  TodoItem을 에 입력한 데이터 하나씩 출력  */}
         {toPassOverData.map((item) => <TodoItem item={item}/>)}
         
        </div>
      )
}

export default TodoBoard