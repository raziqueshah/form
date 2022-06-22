import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";


const ChangePassword = () => {
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
              password: data.get('password'),
              password_confirmation: data.get('password_confirmation')
            }
            // console.log(actualData);
            if(actualData.password && actualData.password_confirmation){
              if(actualData.password === actualData.password_confirmation){
                console.log(actualData);
                document.getElementById('password-change-form').reset();
                setError({status:true, msg: "Password Change Successfully.Thank You.", type:"success"})
                setTimeout(()=>{
                  navigate('/dashboard')
                },3000)
              }
              else{
                setError({status:true, msg: "Password and Confirm Password Doesn't Match", type:"error"})
              }
            } else{
              setError({status:true, msg: "All Fields are Required", type:"error"})
            }
        }
    
      return (
        <>
        <Box sx={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxWidth: 600, mx:4}}>
            <h1>Change Password</h1>
          <Box component='form' noValidate sx={{mt:1}} id="password-change-form" onSubmit={handleSubmit}>
            <TextField required margin="normal" fullWidth id='password' name='password' label='New Password' type='password' autoFocus />
            <TextField required margin="normal" fullWidth id='password_confirmation' name='password_confirmation' label='Confirm Password' type='change-password' autoFocus />
            <Box textAlign='center'>
            <Button type="submit" variant="contained" sx={{mt:3, mb:2, px:5}}>Update</Button>
            </Box>
            <Box>
            {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
            </Box>
          </Box>
          </Box>
        </>
      )
    }

export default ChangePassword;
