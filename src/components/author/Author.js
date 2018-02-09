import React, { Component } from 'react';
import './author.scss';

const Author = (props) => {
  return (
    <li key={props.id} className="author">
      <div className="author-photo-container">
        {!!props.urlToImage && <img className="author-photo" src={props.urlToImage}></img>}
      </div>
      <div className="author-main">
        <div className="author-author">
          <div className="author-text">
            Name
                    </div>
          <div className="author-content">
            {props.firstName}
          </div>
        </div>
      </div>
    </li>
  )
}

export default Author;
