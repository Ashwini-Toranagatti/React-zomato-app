import React from 'react'
import Layout from '../components/Layout'
import {Link} from 'react-router-dom';
import Banner from '../images/banner.jpeg';
import edu from '../images/edu.png'
import '../Styles/Home.css';

const Home = () => {
  return (
    <Layout>
   <div className="home" style= {{backgroundImage : `url(${Banner})` }} >
    <div className="headerContainer">
    
    <img src={edu} alt={'dgugdsd'} height={'130'} width={'150'} />
      <h1>Zomato</h1>
      <p>Find the best restaurants <br/>,cafes and bars in India</p>
      <Link to='/menu'>
      <button>ORDER NOW</button>
      </Link>

    </div>
   </div>
    </Layout>
  )
}

export default Home
