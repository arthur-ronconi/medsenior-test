import { TextField } from "@material-ui/core";

export const CustomInputField = (props) => {
  return (
    <TextField
      id={props.id}
      label={props.label}
      onChange={props.onChange}
      fullWidth
    >
      {props.children}
    </TextField>
  );
};
