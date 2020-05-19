import React from 'react';
import styled from 'styled-components';
import ExitIcon from './icons/ExitIcon';
import PadlockIcon from './icons/PadlockIcon';


const Window = styled.div`
position: absolute;
width: 800px;
height: 488px;
left: 50%;
top: 50%;
margin-top:-244px;
margin-left: -400px;
background: #FFFFFF;
border-radius: 16px;

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

const ProvidePinInfo = styled.p`
margin:auto;
margin-top: 48px;
width: 158px;
height: 24px;
font-family: Nunito Sans;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 24px;
color: #30313D;

@media (max-width: 600px)  {
  margin-top:20px;
}
`;

const SmsInfo = styled.p`
margin:auto;
margin-top: 20px;
width: 406px;
height: 16px;
left: 757px;
top: 460px;
font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
color: #707181;
text-align:center;

@media (max-width: 600px)  {
  margin-top:12px;
  width: 288px;
  height: 44px;
  font-size: 14px;
}
`;

const Inputs = styled.div`
margin:auto;
margin-top: 40px;
width: 290px;
height: 68px;
display:flex;
justify-content:space-between;

@media (max-width: 600px)  {
  width: 260px;
}
`;

const Input = styled.div`
display:inline;
border: 1px solid #DBDCEE;
width: 50px;
height: 68px;
border-radius: 10px;
box-sizing: border-box;
padding: 26px 20px 26px 20px;
`;

const Number = styled.input`
width: 10px;
height: 16px;
border:0;
font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 16px;
color: #30313D;
outline: none;

@media (max-width: 600px)  {
  color: #000000;
}
`;

const Button = styled.button`
margin:auto;
margin-top: 40px;
width: 150px;
height: 54px;
background: rgba(141, 142, 161, 0.1);
border-radius: 4px;
display:flex;
justify-content:center;
cursor:pointer;
align-items:center;
border:none;
`;

const TextButton = styled.p`
font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 16px;
color: #211965;
`;

const NoCode = styled.div`
margin:auto;
margin-top: 20px;
width: 281px;
height: 16px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 16px;
color:#707181;

@media (max-width: 600px)  {
  width: 246px;
  font-size: 14px;
}
`;

const SendAgain = styled.div`
display:inline;
cursor:pointer;
color:#FF7165;
`;

function Modal() {
  return (
    <Window>
      <WindowBody>
        <PadlockIcon />
        <ExitIcon />
        <ProvidePinInfo>Podaj kod PIN</ProvidePinInfo>
        <SmsInfo>Na podany numer telefonu wysłaliśmy SMS z kodem PIN</SmsInfo>
        <Inputs>
          <Input><Number /></Input>
          <Input><Number /></Input>
          <Input><Number /></Input>
          <Input><Number /></Input>
        </Inputs>
        <Button><TextButton>Potwierdź</TextButton></Button>
        <NoCode>Nie otrzymałeś kodu? <SendAgain>Wyślij ponownie</SendAgain></NoCode>
      </WindowBody>
    </Window>
  );
}

export default Modal;
