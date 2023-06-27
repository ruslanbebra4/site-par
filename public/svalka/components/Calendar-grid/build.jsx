import React, { useState, useEffect } from "react";
import moment from "moment/moment";
import Monitor from "./monitor";
import CalendarGrid from "./grid";
import styled_component from "styled-components";
import "./build.module.css";

const ShadowWrapper = styled_component("div")`
  border: 1px solid #737374;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px 6px #888;
`;

const url = "http://localhost:3000";

const totalDays = 42;

function Build() {
  moment.updateLocale("en", { week: { dow: 1 } });
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf("month").startOf("week");

  const prevHandler = () =>
    setToday((prev) => prev.clone().subtract(1, "month"));
  const todayHandler = () => setToday(moment());
  const nextHandler = () => setToday((prev) => prev.clone().add(1, "month"));

  const [events, setEvents] = useState([]);
  const startDateQuery = startDay.clone().format("X");
  const endDateQuery = startDay.clone().add(totalDays, "days").format("X");

  useEffect(() => {
    fetch(`${url}/events?date_gte=${startDateQuery}&date_lte=${endDateQuery}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("Response", res);
        setEvents(res);
      });
  }, [today]);

  return (
    <>
      <ShadowWrapper>
        <Monitor
          today={today}
          prevHandler={prevHandler}
          todayHandler={todayHandler}
          nextHandler={nextHandler}
        />
        <CalendarGrid
          startDay={startDay}
          today={today}
          totalDays={totalDays}
          events={events}
        />
      </ShadowWrapper>
    </>
  );
}

export default Build;
