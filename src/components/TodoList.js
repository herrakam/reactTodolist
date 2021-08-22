import React from "react";
import styled from "styled-components";
import { useTodoState } from "./TodoContext";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px;
  overflow-y: auto;
`;

function TodoList() {
  const state = useTodoState();
  return (
    <TodoListBlock>
      {state.map((todo) => (
        <TodoItem
          text={todo.text}
          done={todo.done}
          key={todo.id}
          id={todo.id}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
