import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
const Cards = (props) => {
  return (
    <div>
      <Card variant="outlined" sx={{ width: 220 }}>
        <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
          {props.product}
        </Typography>

        <Box sx={{ display: "flex" }}>
          <div>
            <Typography level="body3">Total price:</Typography>
            <Typography fontSize="lg" fontWeight="md">
              ${props.price}
            </Typography>
          </div>
        </Box>
      </Card>
    </div>
  );
};
export default Cards;
