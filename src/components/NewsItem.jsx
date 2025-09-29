import React from 'react';
import './NewsItem.css';

const NewsItem = ({ article }) => {
  return (
    <div className="news-card">
      <img src={article.urlToImage || 'https://via.placeholder.com/200x150'} alt={article.title} className="news-image" />
      <div className="news-content">
        <h2 className="news-title">{article.title}</h2>
        <p className="news-description">{article.description}</p>
        <div className="news-footer">
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
