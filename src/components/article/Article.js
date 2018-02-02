import React, { Component } from 'react';
import './article.scss';

const Article = (props) => {
    return (
        <div key={props.url} className="article">
            <div className="article-photo-container">
                <img className="article-photo" src={props.urlToImage}></img>
            </div>
            <div className="article-main">
                <div className="article-author">
                    <div className="article-text">
                        Author
                    </div>
                    <div className="article-content">
                        {props.author}
                    </div>
                </div>
                <div className="article-title">
                    <div className="article-text">
                        Title
                    </div>
                    <div className="article-content">
                        {props.title}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article;