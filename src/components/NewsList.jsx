import React, { useState, useEffect } from 'react';
import FeaturedArticle from './FeaturedArticle';
import NewsItem from './NewsItem';
import Shimmer from './Shimmer';
import './NewsList.css';

const NewsList = () => {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [otherArticles, setOtherArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postsToShow, setPostsToShow] = useState(10)

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    setLoading(true);
    fetch(`https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        const filteredArticles = data.articles.filter(article => article.urlToImage && article.title && article.description);
        setFeaturedArticles(filteredArticles.slice(0, 4));
        setOtherArticles(filteredArticles.slice(4));
        setLoading(false);
        setPostsToShow(10);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [apiKey]);

  const handleShowMore = () => {
    setPostsToShow(postsToShow + 10);
  }
  const handleShowLess = () => {
    setPostsToShow(postsToShow - 10);
  }
  return (
    <div className="news-list-container">
      {loading && <Shimmer />}
      {error && <p className="error-message">Error: {error.message}</p>}
      {!loading && !error && (
        <>
          {featuredArticles.length > 0 && <FeaturedArticle articles={featuredArticles} />}
          <div className="news-feed">
            <h2 className="feed-title">More Stories</h2>
            <div className="news-grid">
              {otherArticles.slice(0, postsToShow).map((article, index) => (
                <NewsItem key={index} article={article} />
              ))}
            </div>
            {postsToShow < otherArticles.length && (
              <button onClick={handleShowMore} className="show-more-button">Show More</button>
            )}
            {postsToShow >= otherArticles.length && (
              <button onClick={handleShowLess} className="show-more-button">Show Less</button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default NewsList;
