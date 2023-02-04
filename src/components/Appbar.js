
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import './Appbar.css'
export default function Appbar() {



    return (

        <AppBar color='transparent' style={{background:'#22282A'}}>

            <Toolbar className='toolbar'>
                <div className='toolbar1' style={{ flexDirection: 'row', display: 'flex' }}>
                    <p style={{color:'white', fontWeight:'800',position:'fixed',left:'0',fontSize:'30px'}}>Zillo</p>
                   <a href='#men' style={{textDecoration:'none'}}><p className="toolbar_text">Home</p></a> 
                    <p className="toolbar_text" onClick={()=>{ window.scrollBy({ behavior:'smooth',top:2500});}}>Courses</p>
                    <a href='#men' style={{textDecoration:'none'}}><p className="toolbar_text">Mentors</p></a> 
                    <a href='#men' style={{textDecoration:'none'}}><p className="toolbar_text">About</p></a> 
                </div>
                <div className='toolbar2'><p>Sign In</p><div className='gstarted'>Get started</div></div>

            </Toolbar>

        </AppBar>


    )
}

