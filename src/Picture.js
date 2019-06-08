import React from 'react';
import LikeButton from './LikeButton';

function Picture(props) {
    return (
      <div className="Picture">       
            <img src={props.url}/>
            <h5>{props.text}</h5>
            <LikeButton/>
        </div>      
    );
  }
  export default Picture;