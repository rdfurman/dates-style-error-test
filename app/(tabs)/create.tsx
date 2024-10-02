import React, { useState } from "react";
import { DatePickerInput } from "react-native-paper-dates";

export default function CreateScreen() {
  const [date, setDate] = useState<Date>();

  return (
    <>
      <DatePickerInput
        locale="en-GB"
        label="Date"
        value={date}
        onChange={(d) => setDate(d)}
        inputMode="start"
      />
    </>
  );
}
