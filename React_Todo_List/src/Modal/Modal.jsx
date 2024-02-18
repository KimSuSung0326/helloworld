import React, { useState } from 'react';
import "./modal.css"

const Modal = ({toPassOverData,setsaveTodo,setisModalOpen ,index}) => {
const [changeValue,setchangeValue] = useState(''); // 변경 값 
const handleChangeValue = () => {

    const updatedTodoList = [...toPassOverData] // 새로운 배열을 만듬
    updatedTodoList[index] = changeValue// 배열의 값에 바뀐 값 저장
    setsaveTodo(updatedTodoList); // 변경된 배열을 저장
    setisModalOpen(false)
}
  return (
    <div> 
      <div className='modlaWrap'>
      <div className='modalbackdrop'>
        <div className='modalcontent'>
          <input className='changeTodo' placeholder='변경 내용을 입력 해주세요' type="text" value={changeValue} onChange={(event) => setchangeValue(event.target.value)}></input>
          <button className='modalbutton' onClick={handleChangeValue}>입력</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Modal;
