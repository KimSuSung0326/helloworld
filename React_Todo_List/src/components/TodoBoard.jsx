import React from "react"
import TodoItem from "./TodoItem"
function TodoBoard({toPassOverData,setsaveTodo}){
 


const deleteClick =(index) =>{
  setsaveTodo(
    toPassOverData.filter((item,delKey) => (delKey!==index))
    )
    console.log('지운데이터',toPassOverData)
}
    return (
   
        <div className="deleteFrame">
           {toPassOverData.map((item,index) => <div key={index}><TodoItem item ={item} />
           {/* 삭제버튼 */}
             <button className="deleteButton" onClick={() =>{deleteClick(index)}} >제거</button>
            { <span className="checkBut"> ✅</span>}
        </div>)}
        </div>
      
      )
}

export default TodoBoard