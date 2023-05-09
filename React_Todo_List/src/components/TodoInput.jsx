import React from "react"
import { useState } from 'react'
import TodoBoard from "./TodoBoard"
function TodoInput(){
  const [makeTodo, setmakeTode] = useState('')// 입력 받았을때 상태를 바꾸기 위한 상태
  const [saveTodo, setsaveTodo] = useState([]) // 버튼을 눌렀을때 데이터를 저장할 배열
  const addItem = () =>{
   setsaveTodo([...saveTodo].concat(makeTodo)) // 빈 배열에 입력받은 상태를 저장 후 상태 변경
 
    console.log(saveTodo)
  }
  

    
    return (
        <div className="tt" >
          <h1 className="one"> Todo List</h1>
          <div>
          <div className="InputName"> <input className="TodoInput" type="text" value={makeTodo} onChange={(event) => setmakeTode(event.target.value) } ></input>
          <button className="TodoInputBut" onClick={addItem}>추가</button>  </div>
           
          <TodoBoard toPassOverData ={saveTodo} setsaveTodo = {setsaveTodo}/> {/* 입력받은 데이터들을 prop를 이용하여 TodoBoard 컴포넌트로 전달 */}
          </div>
            
        
        
        </div>
      )
}

export default TodoInput
