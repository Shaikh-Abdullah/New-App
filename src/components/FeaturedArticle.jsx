import React, { useState, useEffect } from 'react';
import './FeaturedArticle.css';

const FeaturedArticle = ({ articles }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!articles || articles.length === 0) {
    return null;
  }

  const activeArticle = articles[activeIndex];

  return (
    <div className="featured-gallery">
      <div className="featured-main">
        <img key={activeArticle.url} src={activeArticle.urlToImage} alt={activeArticle.title} className="featured-main-image" />
        <div className="featured-main-content">
          <span className="featured-source">{activeArticle.source.name}</span>
          <h1 className="featured-title">{activeArticle.title}</h1>
          <p className="featured-description">{activeArticle.description}</p>
          <a href={activeArticle.url} target="_blank" rel="noopener noreferrer" className="featured-read-more">Read Full Story</a>
        </div>
      </div>
      <div className="featured-thumbnails">
        {articles.map((article, index) => (
          <div 
            key={article.url} 
            className={`thumbnail-item ${index === activeIndex ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <img src={article.urlToImage} alt={article.title} className="thumbnail-image" />
            <div className="thumbnail-title">{article.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticle;
