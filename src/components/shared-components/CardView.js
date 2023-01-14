import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const CardView = ({ selectedRecord }) => {
  return (
    <Card>
      {!selectedRecord && (
        <>
          <CardContent>
            <Typography variant="body2">
              Please select any Record from Actions, and select a Row for
              Details!
            </Typography>
          </CardContent>
        </>
      )}

      {selectedRecord && (
        <>
          <CardContent>
            <Typography variant="h5" component="div">
              {selectedRecord?.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {selectedRecord?.employmentType}
            </Typography>
            <Typography variant="body2">
              {selectedRecord?.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">View Details</Button>
          </CardActions>{" "}
        </>
      )}
    </Card>
  );
};

export default CardView;
