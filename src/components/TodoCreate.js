import React, { useState } from "react";
import styled, { css } from "styled-components";
import { lighten, darken } from "polished";
import { MdAdd } from "react-icons/md";

const CircleButton = styled.div`
  background: gray;
  &:hover {
    background: ${lighten(0.1, "gray")};
  }
  &:active {
    background: ${darken(0.1, "gray")};
  }
  /* 
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: block;
  border: none;
  outline: none;
  cursor: pointer;
  display: grid;
  place-content: center center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0;
  z-index: 5;
  cursor: pointer;
  transform: translate(-50%, 50%);
  transition: 0.125s all ease-in; */
  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: green;
      &:hover {
        background: ${lighten(0.1, "green")};
      }
      &:active {
        background: ${darken(0.1, "green")};
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;
const InsertFormPositioner = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InsertForm = styled.div`
  padding: 32px 32px 72px 32px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background: ${darken(0.1, "lightgray")};
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  outline: none;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const onToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
    //     <>
    //       {open && (
    //         <InsertFormPositioner>
    //           <InsertForm>
    //             <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
    //           </InsertForm>
    //         </InsertFormPositioner>
    //       )}
    //       <CircleButton onClick={onToggle} open={open}>
    //         <MdAdd />
    //       </CircleButton>
    //     </>
  );
}

export default TodoCreate;
