import React from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ru";

const DivWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  background-color: #1e1f21;
  color: #dcdddd;
  padding: 16px;
`;

const TextWrapper = styled("span")`
  font-size: 32px;
`;

const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 8px;
`;

const ButtonsWrapper = styled("div")`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled("button")`
  border: unset;
  background-color: #565759;
  height: 28px;
  margin-right: 2px;
  border-radius: 4px;
  color: #e6e6e6;
  cursor: pointer;
  padding: 9px;
`;

const TodayButton = styled(ButtonWrapper)`
  padding-right: 16px;
  padding-left: 16px;
  font-weight: bold;
`;

const Monitor = ({ today, prevHandler, todayHandler, nextHandler }) => (
  <>
    <DivWrapper>
      <div>
        <TitleWrapper>{today.locale("ru").format("MMMM")}</TitleWrapper>
        <TextWrapper>{today.locale("ru").format("YYYY")}</TextWrapper>
      </div>
      <ButtonsWrapper>
        <ButtonWrapper onClick={prevHandler}>&lt;</ButtonWrapper>
        <TodayButton onClick={todayHandler}>Сегодня</TodayButton>
        <ButtonWrapper onClick={nextHandler}>&gt;</ButtonWrapper>
      </ButtonsWrapper>
    </DivWrapper>
  </>
);

export default Monitor;
