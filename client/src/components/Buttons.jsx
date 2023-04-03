import { Button } from "@mui/material";
const Buttons = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "1rem",
        margin: "1rem",
        padding: "0.2rem",
      }}
    >
      <Button variant="outlined" color="error" onClick={props.handleClick}>
        {props.delete}
      </Button>
      <Button type="submit" variant="outlined" onClick={props.handleSubmit}>
        {props.add}
      </Button>
    </div>
  );
};
export default Buttons;
