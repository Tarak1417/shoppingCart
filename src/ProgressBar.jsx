import { LinearProgress, Typography, Box } from "@mui/material";

function ProgressBar({ subtotal, threshold }) {
  const progress = Math.min((subtotal / threshold) * 100, 100);

  return (
    <Box sx={{ my: 3 }}>
      <Typography variant="body1">
        {subtotal >= threshold
          ? "You got a free Wireless Mouse!"
          : `Spend ₹${threshold - subtotal} more to get a Free Gift!`}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ height: 10, borderRadius: 5, mt: 1 }}
      />
    </Box>
  );
}

export default ProgressBar;
