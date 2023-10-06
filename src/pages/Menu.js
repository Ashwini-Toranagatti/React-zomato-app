import React from 'react'
import {MenuList} from '../data/data.js'
import Layout from '../components/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const Menu = () => {
  return (
    <Layout>
    <Box sx={{display:'flex',flexWrap:'wrap',justifycontent:'center'}}>
{
  MenuList.map(menu => (
    <Card sx={{maxWidth:'350px',display:'flex',m:3.5 }}>
      <CardActionArea>
        <CardMedia sx={{minHeight:'400px'}} component={'img'} src={menu.image} alt={menu.name}/>

        <CardContent>
          <Typography variant='h5' gutterBottom component={'div'}>
             {menu.name}:{menu.price}

          </Typography>
          <Typography variant='body2' gutterBottom component={'div'}>
             {menu.Desc}

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ))
}
    </Box>
    </Layout>
  )
}

export default Menu
