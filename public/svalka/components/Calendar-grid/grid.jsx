import React, { useState } from "react";
import moment from "moment/moment";
import styled_component from "styled-components";
import styles from "./notification.module.css";
import "moment/locale/ru";

const GridWrapper = styled_component.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background-color: ${(props) => (props.isHeader ? "#1e1f21" : "#404040")};
  ${(props) => props.isHeader && "border-bottom: 1px solid #404040"}
`;

const CellWrapper = styled_component.div`
  min-height: ${(props) => (props.isHeader ? 1 : 8)}vh;
  background-color: ${(props) => (props.isWeekend ? "#272829" : "#1e1f21")};
  color: ${(props) => (props.isSelectedMonth ? "#dddcdd" : "#555759")};
`;

const RowInCell = styled_component.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  ${(props) => props.pr && `padding-right: ${props.pr * 8}px`}
`;

const DayWrapper = styled_component.div`
height: 33px;
width: 33px;
display: flex;
align-items: center;
justify-content: center;
margin: 2px;
position: relative;
`;

const CurrentDay = styled_component.div`
  height: 100%;
  width: 100%;
  background: #008000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SnowDayWrapper = styled_component.div`
  display: flex;
  justify-content: flex-end;
`;

const EventItemWrapper = styled_component.button`
cursor: pointer;
border-radius: 50%;
height: 100%;
width: 100%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
background-color: #FF0000;
display: flex;
align-items: center;
justify-content: center;
`;

const CalendarGrid = ({ startDay, today, totalDays, events }) => {
  const day = startDay.clone().subtract(1, "day");
  const daysMap = [...Array(totalDays)].map(() => day.add(1, "day").clone());

  const isCurrentDay = (day) => moment().isSame(day, "day");
  const isSelectedMonth = (day) => today.isSame(day, "month");

  const [showNotification, setShowNotification] = useState(false);

  const handleItemClick = () => {
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };
  return (
    <>
      <GridWrapper isHeader>
        {[...Array(7)].map((_, i) => (
          <CellWrapper isHeader isSelectedMonth key={i}>
            <RowInCell justifyContent={`flex-end`} pr={1}>
              {moment()
                .day(i + 1).locale("ru")
                .format("dddd")}
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>
      <GridWrapper>
        {daysMap.map((dayItem) => (
          <CellWrapper
            key={dayItem.unix()}
            isSelectedMonth={isSelectedMonth(dayItem)}
            isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
          >
            <RowInCell justifyContent={`flex-end`}>
              <SnowDayWrapper>
                <DayWrapper>
                  {isCurrentDay(dayItem) ? (
                    <CurrentDay>{dayItem.format("D")}</CurrentDay>
                  ) : (
                    dayItem.format("D")
                  )}
                  {events
                    .filter(
                      (event) =>
                        event.date >= dayItem.format("X") &&
                        event.date <= dayItem.clone().endOf("day").format("X")
                    )
                    .map((event) => (
                      <EventItemWrapper
                        key={event.id}
                        onClick={handleItemClick}
                      >
                        {dayItem.format("D")}
                      </EventItemWrapper>
                    ))}
                  {showNotification && (
                    <div className={`${styles.alert} ${styles.show}`}>
                      <span className={styles.icon1}></span>
                      <span className={styles.msg}>Уже забронировано</span>
                      <span className={styles.close_btn}>
                        <span className={styles.icon2}></span>
                      </span>
                    </div>
                  )}
                </DayWrapper>
              </SnowDayWrapper>
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>
    </>
  );
};

export default CalendarGrid;
