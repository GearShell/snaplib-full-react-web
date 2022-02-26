import React from 'react';
import './Home.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconButton } from '@material-ui/core';


function Home() {

    const mess =()=> {
        alert("Email Us At: abcphoto@snaplib.com");
    };

  return (
    <div className='home'>
        <div className='home-mainn'>
            <img className='img1' src='http://source.unsplash.com/348x500/?bird,sky'/>
            <img className='img1' src='http://source.unsplash.com/348x500/?newyork,usa'/>
            <img className='img1' src='http://source.unsplash.com/348x500/?delhi,india'/>
            <img className='img1' src='http://source.unsplash.com/348x500/?fire,fire'/>
        </div>
        <div className='main-content'>
            <p>Hello There</p>
            <p>Welcome To SnapLib Photography</p>
            <p>Capture your best memories with our Expert Photographers.</p>
        </div>
        <div className='about-section'>
            <img className='img2' src='https://images.pexels.com/photos/10544670/pexels-photo-10544670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=490&w=360'/>
            <div className='about-content'>
                <p>THANK YOU FOR VISITING MY WEBSITE AND EXPLORING MY WORK. YOU ARE ON ONE OF THE MOST EXCITING AND IMPORTANT JOURNEYS OF YOUR LIFE, HOW EXCITING! YOU HAVE COME TO A PLACE OF INSPIRATION, EXPERIENCE AND KNOWLEDGE. HOPEFULLY MY WORK CONNECTS WITH YOU ON MANY LEVELS - THANK YOU FOR VISITING!</p>
            </div>
        </div>
        <div className='section-content'>
            <h2>FOR EXCEPTIONAL IMAGERY FOR CREATIVE, ADVENTURE, MEMORIES.</h2>
            <button className='section-button' onClick={mess}>Connect With Us</button>
        </div>
        <div className='follow-link'>
            <h1>Follow Us:</h1>
            <IconButton className='follow-button'>
                <FacebookIcon fontSize='large'/>
            </IconButton>
            <IconButton className='follow-button'>
                <InstagramIcon fontSize='large'/>
            </IconButton>
            <IconButton className='follow-button'>
                <TwitterIcon fontSize='large'/>
            </IconButton>
        </div>      
    </div>
  );
};

export default Home;