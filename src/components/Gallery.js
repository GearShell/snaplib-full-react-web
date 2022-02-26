import { ImportExport } from '@material-ui/icons';
import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {

    const [value,setValue] = useState("")
    
    const [results,setResults] = useState([])

    const fetchImages = () => {
        fetch(`https://api.unsplash.com/search/photos?client_id=iU1nsbeOMcgen6Xb1x-T4zIGER6YnvJ3zPUc5ovOXew&query=${value}&orientation=squarish&per_page=50`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setResults(data.results)
        })
    }


  return (
    <div className='gallery'>
        <div className='mydiv'>
            <h1>Gallery</h1>
            <p>Here you can search whole lot of images from world wide stack.</p>
            <input onChange={(e) => setValue(e.target.value)}  type='text' value={value} placeholder='Search for Images here...' />
            <br/>
            <br/>
            <button onClick={() => fetchImages()} type='submit'>Search</button>
        </div>
        <div className='galimg'>
            {
                results.map((item) => {
                return <img className='item' key={item.id} src={item.urls.small} />
                })
            }    
        </div>
    </div>
  );
};

export default Gallery;