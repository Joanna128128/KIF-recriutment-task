import React from "react";
import styled from "styled-components";

const HeaderIcon = styled.div`
  margin-left: 728px;
  margin-top: 20px;
  cursor: pointer;

  @media (max-width: 900px) {
    margin-left: 478px;
  }

  @media (max-width: 600px) {
    margin-left: 260px;
  }
`;

const ExitIcon = () => {
  return (
    <HeaderIcon>
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
    </HeaderIcon>
  );
};

export default ExitIcon;
