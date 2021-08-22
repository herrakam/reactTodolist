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
  console.log(state);
  return (
    <TodoListBlock>
      <TodoItem text="복습중1" done></TodoItem>
      <TodoItem text="복습중2" done></TodoItem>
      <TodoItem text="복습중3" done={false}></TodoItem>
      <TodoItem text="복습중4" done={false}></TodoItem>
    </TodoListBlock>
  );
}

export default TodoList;
