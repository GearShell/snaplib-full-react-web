import React from 'react';
import './About.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconButton } from '@material-ui/core';

function About() {
  return (
    <div className='about'>
        <h1>About Us</h1>
        <p>As a professionally trained photographer and creative visual artist team, our job of telling the most beautiful love stories brings me so much fulfillment and joy. I’m hard-working, yet light-hearted. I love music, movies and most of all, my adorable family. I’m powered by Intelligentsia coffee, green juices filled with crazy superfood concoctions and the thrill of my last mountain bike ride. I love luminous light, beautiful architecture and couples who are deeply in love and who care about creating a magical experience for their wedding day. What does all of this mean for you? With over nine years of experience documenting beautiful weddings around the globe, you can trust me to never miss those important details, candids and spontaneous moments. You can be sure I’ll direct you effortlessly with a guided approach, to allow for a refined, fine art look that always displays authentic emotion.</p>
        <h1>About the Images</h1>
        <p>Images don’t just happen, they’re crafted. Whether it’s being in-the-moment to capture that perfect candid, or saying just the right thing to evoke the ideal reaction, my years of experience have taught me how to navigate all the different aspects of a wedding day so I never miss a moment. When a bride is getting ready, I’ll sometimes clear the room to help her feel more comfortable. We’ll talk about the couple’s history, a story that makes her smile every time she thinks of him. Their first kiss, the first time they held hands and the overwhelming emotion that came with his proposal. As she opens up about their history, I quietly shoot to get the most authentic smile and joy possible. When you fly half-way across the world to exchange your vows in the hills of Tuscany and it rains the entire day, I promise I won’t miss the 15 seconds where the sun peeks out. We’ll chase the light. We’ll make the most of it. And I’ll work harder than you can imagine to capture magical images of your whole celebration, rain or shine.</p>

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

export default About;