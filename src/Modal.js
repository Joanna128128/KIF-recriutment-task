import React from 'react';
import './styles.css';
import styled from 'styled-components';
import ExitIcon from './components/ExitIcon'
import PadlockIcon from './components/PadlockIcon';
//import Icon from './components/Icon';


const Window = styled.div`
position: absolute;
width: 800px;
height: 488px;
left: 560px;
top: 296px;
background: #FFFFFF;
border-radius: 16px;`

const ProvidePinInfo = styled.p`
position: absolute;
width: 158px;
height: 24px;
left: 881px;
top: 416px;
font-family: Nunito Sans;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 24px;
color: #30313D;`

const SmsInfo = styled.p`
position: absolute;
width: 406px;
height: 16px;
left: 757px;
top: 460px;
font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 16px;
color: #707181;
`

const Inputs = styled.div`
position: absolute;
width: 290px;
height: 68px;
left: 815px;
top: 516px;
display:flex;
justify-content:space-between;
`
const Input = styled.div`
display:inline;
border: 1px solid #DBDCEE;
width: 50px;
height: 68px;
border-radius: 10px;
box-sizing: border-box;`

const Number = styled.input`
width: 10px;
height: 16px;
margin: 26px 20px 26px 20px;
box-sizing: border-box;
border:0;
font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 16px;
color: #30313D;
`

const Button = styled.div`
position: absolute;
width: 150px;
height: 54px;
left: 885px;
top: 624px;
position: absolute;
background: rgba(141, 142, 161, 0.1);
border-radius: 4px;
display:flex;
justify-content:center;
`

const TextButton = styled.p`
font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 16px;
color: #211965;`

const NoCode = styled.div`
position: absolute;
width: 281px;
height: 16px;
left: 820px;
top: 698px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 16px;
color:#707181;
`
const SendAgain = styled.div`
display:inline;
cursor:pointer;
color:#FF7165;`


function Modal() {
  return (
    <>
      <Window />
      <PadlockIcon />
      {/* <Icon type = "padlock"></Icon> */}
      <ProvidePinInfo>Podaj kod PIN</ProvidePinInfo>
      <SmsInfo>Na podany numer telefonu wysłaliśmy SMS z kodem PIN</SmsInfo>
      <Inputs>
        <Input><Number></Number></Input>
        <Input><Number></Number></Input>
        <Input><Number></Number></Input>
        <Input><Number></Number></Input>
      </Inputs>
      <Button><TextButton>Potwierdź</TextButton></Button>
      <NoCode>Nie otrzymałeś kodu? <SendAgain>Wyślij ponownie</SendAgain></NoCode>
      <ExitIcon />
      {/* <Icon type="exit"></Icon> */}
    </>
  );
}

export default Modal;
