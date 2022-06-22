import { Button, CssBaseline, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import ChangePassword from './auth/ChangePassword';


const Dashboard = () => {

    const navigate = useNavigate();
    const handleLogout = ()=>{
        console.log("Logout Clicked...");
        setTimeout(()=>{
            navigate('/login');
        },2000)
    }
  return (
    <>
      <CssBaseline />
      <Grid container>
        <Grid item sm={4} sx={{backgroundColor:'gray', color:'white', height:"100vh", pl:4}}>
          <h1>Dashboard</h1>
            <Typography variant="h5">Email: Razique@gmail.com</Typography>
            <Typography variant="h6">Name: Razique Shah</Typography>
            <Button variant="contained" color="warning" size="large" onClick={handleLogout} sx={{mt:8}}>Logout</Button>
        </Grid>
        <Grid item sm={8} textAlign='center'>
          <ChangePassword />
        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard;



/* p:4 is used in place of height */