import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconButton } from '@material-ui/core';

function Contact() {
    
    const mess =()=> {
        alert("Email Us At: abcphoto@snaplib.com");
    };

  return (
    <div className='contact'>
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-black rounded text-lg-">Send</button>
                        </div>
                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                            <p className="leading-normal my-5">49 Smith St.
                                <br/>Saint Cloud, MN 56301
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className='section-content'>
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

export default Contact;