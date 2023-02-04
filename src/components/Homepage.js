import React from 'react'
import Grid from '@mui/material/Grid';
import "./Homepage.css"
export const Homepage = () => {
  return (
    <Grid container spacing={0} className="mainhome">
             <Grid item xs={6} className="home1"> 
                 <div><p>Find your Dream Job</p></div> 
                  <div><button>Get started</button></div>
             </Grid>
             <Grid item xs={6} className="home2"></Grid>
    </Grid>
  )
}
