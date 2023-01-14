import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardView = ({ isDetail, selectedJob }) => {
  const history = useHistory();
  console.log("history", history);
  const record =
    isDetail === false ? selectedJob : history?.location?.state?.currentJob;
  const [job, setJob] = useState(record);

  useEffect(() => {
    setJob(record);
  }, [record]);

  const handleNavigateToDetails = () => {
    history.push({
      pathname: `/job_detail/${job?.id}`,
      state: {
        currentJob: job,
      },
    });
  };

  console.log("job", job);

  return (
    <Card>
      {!job && (
        <>
          <CardContent>
            <Typography variant="body2">
              Please select any Record from Actions, or select a Row for the
              Details!
            </Typography>
          </CardContent>
        </>
      )}

      {job && (
        <>
          <CardContent>
            <Typography variant="h5" component="div">
              {job?.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {job?.employmentType}
            </Typography>
            <Typography variant="body2">{job?.description}</Typography>
          </CardContent>

          {!isDetail && (
            <CardActions>
              <Button size="small" onClick={handleNavigateToDetails}>
                View Details
              </Button>
            </CardActions>
          )}
        </>
      )}
    </Card>
  );
};

export default CardView;
