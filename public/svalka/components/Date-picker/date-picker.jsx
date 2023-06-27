import * as React from "react";
import { styled } from "@mui/system";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo/DemoContainer";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "moment/locale/de";

const CustomysedDatePicker = styled(DatePicker)`
  min-width: 100px;
  max-width: 100px;
  width: 100px
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

export default function ControlledComponent() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="de">
      <DemoContainer components={["DatePicker"]}>
        <CustomysedDatePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
