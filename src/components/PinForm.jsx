import React, { useState } from "react";
import styled from "styled-components";

const ProvidePinInfo = styled.p`
  width: 158px;
  height: 24px;
  margin: auto;
  margin-top: 48px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  color: #30313d;
  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;

const SmsInfo = styled.p`
  width: 406px;
  height: 16px;
  margin: auto;
  margin-top: 20px;
  text-align: center;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #707181;
  @media (max-width: 600px) {
    width: 288px;
    height: 44px;
    margin-top: 12px;
    font-size: 14px;
  }
`;

const ListInputs = styled.div`
  width: 290px;
  height: 68px;
  margin: auto;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 260px;
  }
`;

const Input = styled.input`
  display: inline;
  box-sizing: border-box;
  width: 50px;
  height: 68px;
  padding: 26px 18px 26px 18px;
  border: 1px solid ${(props) => (props.completePin ? "#DBDCEE" : "#FF7165")};
  border-radius: 10px;
  outline: none;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #30313d;
  &:active {
    background-color: #ffffff !important;
  }
  @media (max-width: 600px) {
    color: #000000;
  }
`;

const NoCompletePinInfo = styled.div`
  position: absolute;
  width: 100%;
  height: 16px;
  margin: auto;
  margin-top: 10px;
  text-align: center;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 22px;
  color: #ff7165;
`;

const Button = styled.button`
  margin: auto;
  margin-top: 40px;
  width: 150px;
  height: 54px;
  background: rgba(141, 142, 161, 0.1);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  border: none;
  &:focus {
    outline-color: transparent;
  }
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
  width: 281px;
  height: 16px;
  margin: auto;
  margin-top: 20px;
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #707181;
  @media (max-width: 600px) {
    width: 246px;
    font-size: 14px;
  }
`;

const SendAgain = styled.div`
  display: inline;
  cursor: pointer;
  color: #ff7165;
`;


const PinForm = () => {
  const [number] = useState("");
  const [pin, setPin] = useState([]);
  const [completePin, setCompletePin] = useState(true);

  function checkNumber(e) {
    const number = e.target.value;

    if (number.length > 1) {
      e.target.value = "";
      return alert("W jednym polu powinna być jedna cyfra.");

    } else if (isNaN(number)) {
      e.target.value = "";
      return alert("Wpisz liczbę od 0 do 9.");

    } else {
      const index = e.target.name.toString() - 1;
      pin[index] = e.target.value;
      setPin(pin);

      const filledFields = pin.filter((nr) => nr !== "");
      const amountOfElements = filledFields.length;

      if (amountOfElements === 4) {
        setCompletePin(true);
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const filledFields = pin.filter((nr) => nr !== "");
    const amountOfElements = filledFields.length;

    if (amountOfElements < 4) {
      setCompletePin(false);

    } else {
      setCompletePin(true);
      alert(`Twój pin to: ${pin.join("")}.`);
      e.target.reset();
      setPin([]);
    }
  }

  return (
    <>
      <ProvidePinInfo>Podaj kod PIN</ProvidePinInfo>
      <SmsInfo>Na podany numer telefonu wysłaliśmy SMS z kodem PIN</SmsInfo>
      <form onSubmit={handleSubmit}>
        <ListInputs>
          <Input completePin={completePin} name="1" value={number[1]} onChange={checkNumber}/>
          <Input completePin={completePin} name="2" value={number[2]} onChange={checkNumber}/>
          <Input completePin={completePin} name="3" value={number[3]} onChange={checkNumber}/>
          <Input completePin={completePin} name="4" value={number[4]} onChange={checkNumber}/>
        </ListInputs>
        {completePin ? "" : <NoCompletePinInfo>Pin musi zawierać 4 cyfry</NoCompletePinInfo>}
        <Button type="submit"><TextButton>Potwierdź</TextButton></Button>
      </form>
      <NoCode>Nie otrzymałeś kodu? <SendAgain>Wyślij ponownie</SendAgain></NoCode>
    </>
  );
};

export default PinForm;
