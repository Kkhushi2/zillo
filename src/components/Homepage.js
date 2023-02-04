import React from 'react'
import Grid from '@mui/material/Grid';
import "./Homepage.css"
import Carousel from './Caraousel';

export const Homepage = () => {
    var item=[{id:'1',pic:"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"},
    {id:'2',pic:"https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png"},
    {id:'3',pic:"https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png"},
    {id:'3',pic:"https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png"},
    {id:'3',pic:"https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png"},
    {id:'3',pic:"https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png"},
    ]
  return (
    <>
    <Grid container spacing={0} className="mainhome">
             <Grid item xs={6} className="home1"> 
                  <div><p>Find your Dream Job</p></div> 
                  <div><button>Get started</button></div>
             </Grid>
             <Grid item xs={6} className="home2"></Grid>
    </Grid>
     <Grid container spacing={0} >
      <Grid item xs={12}><div className="maincarousel"><div style={{marginBottom:'10px'}}>Our inverstors</div><Carousel item={item}/></div></Grid>
     </Grid>
     </>
  )
}
