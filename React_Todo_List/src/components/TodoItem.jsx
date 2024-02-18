import React from "react"
import "./TodoItem.css"
function TodoItem({item, ischeck}){
 
    return (
        
       <>
        <div className= {`TodoItem ${ischeck ? 'checked' : ''}`}>
          {item}
        </div>
       </>
      
      )
}

export default TodoItem