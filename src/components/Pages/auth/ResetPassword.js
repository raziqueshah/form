import { Grid, TextField, Button, Box, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
    };
    // console.log(actualData);
    if (actualData.password && actualData.password_confirmation) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById("password-reset-email-form").reset();
        setError({
          status: true,
          msg: "Password Reset is Successful.Redirecting to Login Page...",
          type: "success",
        });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        setError({
          status: true,
          msg: "Password and Confirmation Password Doesn't Match",
          type: "error",
        });
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
          <h1>Reset Password</h1>
          <Box component="form" noValidate sx={{ mt: 1 }} id="password-reset-email-form" onSubmit={handleSubmit}>
            <TextField required margin="normal" fullWidth id="password" name="password" label="password" type="password" />
            <TextField required margin="normal" fullWidth id="password_confirmation" name="password_confirmation" label="Confirm Password" type="password_confirmation" />
            <Box textAlign="center">
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}>Reset Password</Button>
            </Box>
            {error.status ? (<Alert severity={error.type}>{error.msg}</Alert>) : ("")}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ResetPassword;
