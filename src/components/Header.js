import React,{useState} from 'react'
import {Box,AppBar,IconButton,Drawer,Toolbar,Typography, Divider} from '@mui/material'

import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import "../Styles/Header.css";
import zomato from '../images/zmt.png'




const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)


  const handleDrawerToggle = () =>{
    setMobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer = (
  <Box onClick = {handleDrawerToggle} sx = {{textAlign:'center'}}>


<Typography 
  color={'goldenrod'} 
  variant = "h6" 
  component = 'div'
  sx={{flexGrow:2}}
  
  >
    <DeliveryDiningIcon/>
    
     My Zomato</Typography>
   
  
 
  <ul className='mobile-navigation'>
    <li>
      <Link to={'/'}>Home</Link>
    </li>

    <li>
      <Link to={'/about'}>About</Link>
    </li>

    <li>
      <Link to={'/contact'}>Contact</Link>
    </li>

    <li>
      <Link to={'/menu'}>Menu</Link>
    </li>

   
  </ul>

  </Box>
  )
  return (
    <>
     <Box>
<AppBar component={'nav'} sx = {{bgcolor:'black'}}>
  <Toolbar>
    <IconButton color='inherit' aria-label='open drawer' edge = 'start' sx={{
      mr:2,
      display:{sm:'none'},
     
      }}
      onClick={handleDrawerToggle}>
<MenuIcon/>
    </IconButton>
  <Typography 
  color={'goldenrod'} 

  
  variant = "h4" 
  component = 'div'
  
  sx={{flexGrow:2,"& img":{ml:1,marginTop:2}}}
  >
     


      <img src={zomato} height={'45'} width={'50'} />
   
  
     Zomato


     
   
     
     </Typography>
  <Divider/>
 <Box sx={{display:{xs:"none", sm:"block"}}}>
  <ul className='navigation-menu'>
    <li>
      <Link to={'/'}>Home</Link>
    </li>



    <li>
      <Link to={'/menu'}>Menu</Link>
    </li>
    
    <li>
      <Link to={'/about'}>About</Link>
    </li>

    <li>
      <Link to={'/contact'}>Contact</Link>
    </li>


   
  </ul>
 </Box>
 </Toolbar>
</AppBar>

<Box component='nav'>
  <Drawer variant="temporary"  
  open={mobileOpen} 
  onClose={handleDrawerToggle}
  sx={{display:{xs:'block',sm:'none '},
  "& .muiDrawer-paper":{
    boxSizing:'border-box',
    width:'240px',
 },
}}
 
  >
    {drawer}
  </Drawer>
</Box>
<Box >
<Toolbar/>
</Box >

     </Box>
    </>
  )
}

export default Header
