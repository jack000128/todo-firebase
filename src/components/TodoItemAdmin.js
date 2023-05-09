/*
  각각의 할 일 항목을 렌더링하는 컴포넌트입니다.
  각 할 일의 완료 상태에 따라 체크박스와 텍스트 스타일을 동기화하며,
  삭제 버튼을 통해 해당 할 일을 삭제할 수 있습니다.
  이 컴포넌트는 `TodoList.js`에서 사용되어 할 일 목록을 구성합니다.
*/
import React from "react";
import styles from "@/styles/TodoList.module.css";

// TodoItem 컴포넌트를 정의합니다.
const TodoItemAdmin = ({ todo }) => {
  // 각 할 일 항목을 렌더링합니다.
  return (
    <li className={styles.todoItem}>
     
     
      <span className={styles.todoText}>
        {todo.text}
      </span>

      <span className={styles.todoTime}>
        {todo.datetime}
      </span>

    </li>
  );
};

// TodoItem 컴포넌트를 내보냅니다.
export default TodoItemAdmin;
