import {TextField, FormControlLabel, Checkbox, Button, Box, Alert} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";

const Registration = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
      tc: data.get("tc"),
    };
    // console.log(actualData);
    if (actualData.password === actualData.password_confirmation) {
      if (actualData.name && actualData.email && actualData.password && actualData.tc !== null) {
        console.log(actualData);
        document.getElementById("registration-form").reset();
        setError({
          status: true,
          msg: "Registration Successful.Redirected to Dashboard",
          type: "success",
        });
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      } else {
        setError({
          status: true,
          msg: "All fields are required",
          type: "error",
        });
      }
    } else {
      setError({
        status: true,
        msg: "Password and Confirm Password does not match",
        type: "error",
      });
    }
  };

  return (
    <>
    <Box contained>
      <Box component="form" noValidate sx={{ mt: 1 }} id="registration-form" onSubmit={handleSubmit}>
        <TextField required margin="normal" fullWidth id="name" name="name" label="Name" autoFocus />
        <TextField required margin="normal" fullWidth id="email" name="email" label="Email Address" />
        <TextField required margin="normal" fullWidth id="password" name="password" label="password" type="password" />
        <TextField required margin="normal" fullWidth id="password_confirmation" name="password_confirmation" label="Confirm Password" type="password_confirmation" />
        <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc" />} label="I agree to term and Condition" />
        <Box textAlign="center">
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}>Join</Button>
        </Box>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
      </Box>
      </Box>
    </>
  );
};

export default Registration;
