import React from "react";
import styled from "styled-components";
import ExitIcon from "./icons/ExitIcon";
import PadlockIcon from "./icons/PadlockIcon";

const Window = styled.div`
position: absolute;
left: 50%;
top: 50%;
width: 800px;
height: 488px;
margin-top:-244px;
margin-left: -400px;
border-radius: 16px;
background: #FFFFFF;
@media (max-width: 900px)  {
  width: 550px;
  height: 468px;
  margin-left:-275px;
  margin-top: -234px;
}
@media (max-width: 600px)  {
  width: 328px;
  height: 468px;
  margin-left:-164px;
  margin-top: -234px;
`;

const WindowBody = styled.div`
  height: 100%;
`;

const Modal = (props) => {
  return (
    <Window>
      <WindowBody>
        <PadlockIcon />
        <ExitIcon />
        {props.children}
      </WindowBody>
    </Window>
  );
};

export default Modal;
