import { Box, Input } from "@chakra-ui/react";
import DatePicker, {
  DayValue,
  RenderInputProps,
  utils,
} from "@hassanmojab/react-modern-calendar-datepicker";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import React from "react";

interface ConfirmDateProps {
  selectedDate: DayValue | null;
  setSelectedDate: (date: DayValue | null) => void;
}

const ConfirmDate: React.FC<ConfirmDateProps> = ({
  selectedDate,
  setSelectedDate,
}) => {
  const renderCustomInput = ({ ref }: RenderInputProps) => (
    <Input
      ref={ref as React.RefObject<HTMLInputElement>}
      placeholder="Selecciona la fecha"
      value={
        selectedDate
          ? `${selectedDate.day}-${selectedDate.month}-${selectedDate.year}`
          : ""
      }
      textAlign="center"
      cursor="pointer"
      onChange={() => console.log("Changed date")}
      name="user_birth_date"
      borderRadius="10px"
      autoComplete="off"
      outline="none"
      bg="blackAlpha.200"
      fontSize="1rem"
      p="1rem 1rem"
      required
      h="10px"
      className="my-custom-input-class" // Apply your custom CSS class here
    />
  );

  return (
    <Box maxW="183px" cursor="pointer">
      <DatePicker
        onChange={setSelectedDate}
        value={selectedDate}
        renderInput={renderCustomInput}
        maximumDate={utils("en" || "es").getToday()}
      />
    </Box>
  );
};

export default ConfirmDate;
