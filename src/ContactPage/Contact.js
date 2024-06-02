import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Item from "antd/es/list/Item";
import { Button, TextField } from "@mui/material";
import "./Contact.css"
import Header from "../AppHeader/Header";

const Contact = () => {
  return (
   <>
      <Header />
      <div className="contact-page">
      <div className="common-heading"> Got Any Question?</div>
      <div className="contact-welcome-text">Interested in connecting? Send me the message, I'll get in touch with you shortly!</div>
      <Box sx={{ flexGrow: 4}} className="contact-container" >
        <Grid container spacing={2}>
          <Grid item xs={6}>
          <TextField fullWidth  label="Name" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
          <TextField  label="Email" fullWidth  variant="outlined" />
          </Grid>
          <Grid item xs={12}>
          <TextField 
          label="Message"
          multiline
          rows={4}
          maxRows={4} fullWidth variant="outlined" />
          </Grid>
        </Grid>
      </Box>
      <button className="common-btn contact-send-btn">SEND</button>
    </div>
    </>
  );
};
export default Contact;
