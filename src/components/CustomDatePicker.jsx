import { useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({ name = "" }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <DatePicker
      className="p-2"
      {...field}
      selected={value}
      onChange={(date) => setValue(date)}
      placeholderText="Select date"
      minDate={new Date()}
    />
  );
};

export default CustomDatePicker;
