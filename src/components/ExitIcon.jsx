import React from "react";
import styled from "styled-components";

const IconBackGround = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  left: 1288px;
  top: 320px;
  cursor: pointer;
`;

const ExitIcon = () => {
  return (
    <IconBackGround>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="47"
          height="47"
          rx="9.5"
          stroke="#DBDCEE"
        />
        <path
          d="M30 18L18 30"
          stroke="#30313D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18 18L30 30"
          stroke="#30313D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </IconBackGround>
  );
};

export default ExitIcon;
