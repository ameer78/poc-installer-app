import * as React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const LinearProgressWithLabel = (
  props: LinearProgressProps & { value: number }
) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

const LinearProgressWithValueLabel = (props: any) => {
  const {progress, message} = props;

  return (
    <Box sx={{ width: "100%", padding: "20px" }}>
      <Typography variant="h6">
        {message || ""}
        <br />
        {`${progress || 0}%`}
      </Typography>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
};

export default LinearProgressWithValueLabel;
