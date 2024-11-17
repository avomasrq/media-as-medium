import React from 'react';
import './index.css';

function Article({ article }) {
  return (
    <div className="d-flex mt-5">
      <div id="article">
        <p id="author">Authors name in Topics Name</p>
        <h3 id="title">{article.title}</h3>
        <p id="body">{article.body}</p>
        {/* <nav className="navbar fixed-bottom bg-body-tertiary">
          <div className="container-fluid">
            <button className="navbar-brand position-absolute top-50 start-0 translate-middle-y">Java Script</button>
          </div>
        </nav> */}
      </div>
      <img src={article.imageUrl} className="rounded mx-auto d-block m-lg-5" alt="article" />
    </div>
  );
}

export default Article;