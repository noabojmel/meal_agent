import React from "react";
import { Box, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function ErrorState() {
  return (
    <Box
      sx={{
        mt: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "text.secondary",
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 64, mb: 2 }} />

      <Typography variant="h6" gutterBottom>
        I can’t answer this question
      </Typography>

      <Typography variant="body2" align="center">
        Please try asking for a recipe 
      </Typography>
    </Box>
  );
}
