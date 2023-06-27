import React from "react";
import styles from "./booking.module.css";
import styled_component from "styled-components";
import Build from "../../components/Calendar-grid/build";
import Menu from "../../components/Menu/menu";

// @mui imports:
import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)`
  display: inline-flex;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  line-height: 1.71429;
  font-size: 0.875rem;
  text-transform: none;
  font-family: __Inter_916fa9, __Inter_Fallback_916fa9, Helvetica, Arial,
    sans-serif;
  border-radius: 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: rgb(33, 43, 54);
  background: rgb(255, 171, 0);
  box-shadow: none;

  &:hover {
    background-color: #b76e00;
    box-shadow: 0px 8px 16px 0px rgb(22 28 36 / 24%);
  }

  @media only screen and (max-width: 700px) {
    margin: 5% 0 0 5%;
    width: 90%;
  }
`;

function Booking() {
  return (
    <>
      <video autoPlay muted loop id="video">
        <source src="src\assets\video\3780057565728.mp4" type="video/mp4" />
      </video>
      <div className={styles.header}>
        <Button
          href="index.html"
          className={styles.btn_header}
          variant="outlined"
        >
          Закрыть
        </Button>
      </div>
      <div className={styles.content_box}>
        <div className={styles.text_nav}>
          <h2 className={styles.text_h2}>
            Выберите дату бронирования зала и количество гостей
          </h2>
        </div>
        <div className={styles.page_container}>
          <Build />
          <Menu />
          <CustomButton variant="contained" href="booking.html">
            Перейти
          </CustomButton>
        </div>
      </div>
    </>
  );
}

export default Booking;
