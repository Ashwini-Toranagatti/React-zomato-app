import React from 'react'
import Layout from '../components/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
const Contact = () => {
  return (
    <Layout>
     <Box sx={{my:5,ml:10,"& ":{fontWeight:"bold",mb:2,textAlign:'justify'},}}>
      <Typography><h1>Contact my restaurant</h1></Typography>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum dolorem inventore ad ut quis! Maiores sunt commodi itaque velit, molestiae illum qui nobis suscipit, obcaecati a aperiam placeat tenetur veritatis tempore corporis hic porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum dolorem inventore ad ut quis! Maiores sunt commodi itaque velit, molestiae illum qui nobis suscipit, obcaecati a aperiam placeat tenetur veritatis tempore corporis hic porro?</p>
     </Box>
     <Box 
     sx={{m:1,width:'600px',
     ml:7,
     "@media (max-width:600px)":{width:"300px"},
     }}>
      <TableContainer component={Paper}>
        <Table aria-label="contact table">
          <TableHead>
            <TableRow>
              <TableCell sx={{bgcolor:"black",color:"white"}} align='center'>Contact Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <SupportAgentIcon sx={{color:"red",pt:1}}/> 1800-00-0000 (tollfree)
                </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <EmailIcon sx={{color:"lightblue",pt:1}}/> helpline@yahoo.com
                </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <PhoneIcon sx={{color:"green",pt:1}}/> 9874-563212
                </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <SupportAgentIcon sx={{color:"red",pt:1}}/> 1800-00-0000 (tollfree)
                </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <SupportAgentIcon sx={{color:"red",pt:1}}/> 1800-00-0000 (tollfree)
                </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
     </Box>
    </Layout>
  )
}

export default Contact
