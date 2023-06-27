import React from "react";
import styled_component from "styled-components";
import BasicDatePicker from "../Date-picker/date-picker";

// @mui imports:
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const MenuWrapper = styled_component.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: space-between;
  padding: 10px 0;
  @media only screen and (max-width: 600px) {
    width: 95%;
  }
  @media only screen and (min-width: 600px) {
  }
`;

const InputDate = styled_component.div`
  padding-bottom: 10px;
  display: flex; 
  flex-wrap: wrap;
  align-items: center;
`;

const InputCount = styled_component.div`
  display: flex; 
  align-items: center;
`;

const LabelDate = styled_component.label`
  padding-right: 20px;
  font-family: raleway-c;
  font-weight: 550;
  color: #696666;
  @font-face {
    font-family: raleway-c;
    src: url(../../../../fonts/raleway-regular.woff2);
  }
  @media only screen and (max-width: 600px) {
  }
`;

const LabelCount = styled_component.label`
  padding-right: 35px;
  font-family: raleway-c;
  font-weight: 550;
  color: #696666;
  @font-face {
    font-family: raleway-c;
    src: url(../../../../fonts/raleway-regular.woff2);
  }
  @media only screen and (max-width: 600px) {
  }
`;

const CustomBox = styled(Box)`
  min-width: 125px;
  @media only screen and (max-width: 600px) {
    min-width: 110px;
  }
`;

function Menu() {
  const [count, setCount] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCount(event.target.value as string);
  };
  return (
    <MenuWrapper>
      <InputDate>
        <LabelDate>Выбранная дата:</LabelDate>
        <BasicDatePicker />
      </InputDate>
      <InputCount>
        <LabelCount>Кол-во гостей:</LabelCount>
        <CustomBox>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Выбрать...</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={count}
              label="Count"
              onChange={handleChange}
            >
              <MenuItem value={150}>150</MenuItem>
              <MenuItem value={200}>200</MenuItem>
              <MenuItem value={250}>250</MenuItem>
              <MenuItem value={300}>300</MenuItem>
              <MenuItem value={350}>350</MenuItem>
              <MenuItem value={400}>400</MenuItem>
              <MenuItem value={450}>450</MenuItem>
              <MenuItem value={500}>500</MenuItem>
            </Select>
          </FormControl>
        </CustomBox>
      </InputCount>
    </MenuWrapper>
  );
}

export default Menu;
