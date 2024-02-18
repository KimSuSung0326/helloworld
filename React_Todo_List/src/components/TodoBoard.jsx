import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoBoard.css";
import Modal from "../Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";

function TodoBoard({ toPassOverData, setsaveTodo, ListCount, setListCount }) {
  const [ischeck, setIscheck] = useState(toPassOverData.map(() => false));
  const [isModalOpen, setisModalOpen] = useState(false);

  const deleteClick = (index) => {
    setsaveTodo(toPassOverData.filter((item, delKey) => delKey !== index));
    const changedTodoList = ischeck.filter((_, idx) => idx !== index);
    setIscheck(changedTodoList);
    setListCount(ListCount - 1); // 삭제 시 ListCount 감소
  };

  const changeClick = (index) => {
    setisModalOpen(true);
  };

  const checkClick = (index) => {
    const updatedTodoList = [...ischeck];
    updatedTodoList[index] = true;
    setIscheck(updatedTodoList);
    setListCount(ListCount - 1); // 체크된 항목 추가 시 ListCount 감소
  };

  const checkClickFalse = (index) => {
    const updatedTodoList = [...ischeck];
    updatedTodoList[index] = false;
    setIscheck(updatedTodoList);
    setListCount(ListCount + 1); // 체크 해제된 항목 제거 시 ListCount 증가
  };

  return (
    <div className="deleteFrame">
      {toPassOverData.map((item, index) => (
        <div className="TodolistBox" key={index}>
          <TodoItem item={item} ischeck={ischeck[index]} />
          {isModalOpen ? (
            <Modal
              toPassOverData={toPassOverData}
              setsaveTodo={setsaveTodo}
              setisModalOpen={setisModalOpen}
              index={index}
              ListCount={ListCount}
              setListCount={setListCount}
            />
          ) : null}
          <button className="changeButton" onClick={() => changeClick(index)}>
            수정
          </button>
          <button className="deleteButton" onClick={() => deleteClick(index)}>
            제거
          </button>
          {ischeck[index] ? (
            <span
              className="checkBut-false"
              onClick={() => checkClickFalse(index)}
            >
              <FontAwesomeIcon
                icon={faSquareCheck}
                color="violet"
                size="2x"
              />
            </span>
          ) : (
            <span className="checkBut" onClick={() => checkClick(index)}>
              <FontAwesomeIcon icon={faSquare} color="violet" size="2x" />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoBoard;
