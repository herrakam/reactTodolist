import React from "react";
import { MdDone, MdDelete } from "react-icons/md";
import styled, { css } from "styled-components";
import { lighten } from "polished";

const Remove = styled.div`
  opacity: 0;
  display: grid;
  place-content: center center;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: lightgray;
  }
`;
const TodoItemBlock = styled.div`
  padding: 12px 0;
  display: flex;
  align-items: center;
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid gray;
  font-size: 24px;
  background: lightgray;
  display: grid;
  place-content: center center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid ${lighten(0.1, "lightgray")};
      color: ${lighten(0.3, "black")};
    `}
`;

const Text = styled.div`
  font-size: 21px;
  flex: 1;
  ${(props) =>
    props.done &&
    css`
      color: lightgray;
    `}
`;

function TodoItem({ text, done }) {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>
        {done && <MdDone done={done}></MdDone>}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove done={done}>{<MdDelete></MdDelete>}</Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
