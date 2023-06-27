import React, { useState } from "react";
import styles from "./notification.module.css";

// @mui imports:
import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)`
  margin-bottom: 20px;
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

const Notification = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleButtonClick = () => {
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <>
      <script
        src="https://kit.fontawesome.com/a076d05399.js"
        crossorigin="anonymous"
      ></script>
      <div>
        <CustomButton variant="contained" onClick={handleButtonClick}>
          Перейти
        </CustomButton>
        {showNotification && (
          <div className={`${styles.alert} ${styles.show}`}>
            <span className={styles.icon1}></span>
            <span className={styles.msg}>Уведомление</span>
            <span className={styles.close_btn}>
              <span onClick={handleClick} className={styles.icon2}></span>
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Notification;
