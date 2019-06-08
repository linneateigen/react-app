import React from 'react';
import Picture from './Picture.js';
import DuckImg from './Pictures/duck.jpg';
import ParrotImg from './Pictures/parrot.jpg';
import ArtImg from './Pictures/street-art.jpg';

const pics = [{url:DuckImg, text:'Duckling'}, {url:ParrotImg, text: 'Parrot'}, {url:ArtImg, text:'Art'}];

function Gallery() {
    return (
      <div>
        <div className="GalleryContainer">
        {pics.map((pic, i) => {        
           return (<Picture key={i} url={pic.url} text={pic.text}/>) 
        })}
        </div>
      </div>
    );
  }

  export default Gallery;