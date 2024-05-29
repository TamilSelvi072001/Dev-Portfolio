import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Item from "antd/es/list/Item";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button, IconButton, TextField } from "@mui/material";

const Footer=()=>{
return(
    <Box sx={{ flexGrow: 4}}  >
        <Grid container spacing={2}>
          <Grid item xs={6}>
          <IconButton
        
        aria-label="LinkedIn"
        onClick={() => window.open('https://www.linkedin.com/in/tamil-selvi-g', '_blank')}
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>
          </Grid>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </Box>
)
}
export default Footer