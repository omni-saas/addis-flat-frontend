'use client'

import { Box, Container, Typography } from "@mui/material";

export default function Reports() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py:5
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h4"> Reports </Typography>
        
      </Container>
    </Box>
  );
}

