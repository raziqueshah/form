import { TextField, Button, Box, Alert } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

import React from 'react';
import { useState } from "react";

const UserLogin = () => {

  const [error, setError] = useState({
    status:false,
    msg:"",
    type: ""
  })

  const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
          email: data.get('email'),
          password: data.get('password')
        }
        // console.log(actualData);
        if(actualData.email && actualData.password){
          console.log(actualData);
          document.getElementById('login-form').reset();
          setError({status:true, msg: "Login Success", type:"success"})
          navigate('/dashboard')
        } else{
          setError({status:true, msg: "All Fields are Required", type:"error"})
        }
    }

  return (
    <>
      <Box component='form' noValidate sx={{mt:1}} id="login-form" onSubmit={handleSubmit}>
        <TextField required margin="normal" fullWidth id='email' name='email' label='Email Address' autoFocus />
        <TextField required margin="normal" fullWidth id='password' name='password' label='password' type='password' autoFocus />
        <Box textAlign='center'>
        <Button type="submit" variant="contained" sx={{mt:3, mb:2, px:5}}>Login</Button>
        </Box>
        <NavLink to='/sendpasswordresetemail'>Forgot Password ?</NavLink>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
      </Box>
    </>
  )
}

export default UserLogin
