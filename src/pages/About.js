import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
     <Box sx={{
      my:13,
      textAlign:'center',
      padding:2,
      "& h5":{
        fontWeight:'bold',
        my:3,
        fontSize:'1.0rem',
      },
      "& p":{
        textAlign:"justify"
      },
      "@media (max-width:600px)":{
        mt:0
      },
     }}>
      <Typography variant='h5'>
        <h1>Welcome to Zomato<br/>Food with the great taste!!</h1>
      </Typography>
      <p>
Zomato is a prominent online food service and restaurant aggregator platform that operates in numerous countries worldwide. It offers a comprehensive range of services, including restaurant discovery, online ordering, and food delivery. Users can search for restaurants in their vicinity or at specific locations, explore detailed menus, check ratings and reviews, and make informed dining choices. Zomato's robust food delivery network allows customers to place food orders online from their preferred restaurants and get them delivered to their homes or offices, making it convenient for both dine-in and takeaway. It provides users with location-based services, leveraging geolocation to help them discover nearby restaurants and order food from the most convenient options available.</p>
      <br/>
      <p>Additionally, Zomato offers table reservation services in some regions, simplifying the process of booking a table at a restaurant. Users are encouraged to share their dining experiences through reviews and ratings, helping others make informed decisions. The platform also features subscription-based programs like Zomato Gold, providing special deals and discounts at select restaurants and bars. With a wide variety of cuisines, dishes, and culinary preferences to explore, Zomato serves as a comprehensive platform for food enthusiasts, offering convenience, choice, and culinary exploration.Furthermore, Zomato encourages engagement with the culinary world through its food blogging and content creation. Users can access a wealth of food-related articles, blogs, and content, catering to both the gastronomically curious and those seeking entertainment and information.</p>
     </Box>
    </Layout>
  )
}

export default About
