import React from 'react';
import './Skeleton.css';

const Shimmer = () => {
  const renderSkeletonItems = () => {
    return Array.from({ length: 4 }).map((_, index) => (
      <div className="news-card skeleton" key={index}>
        <div className="skeleton image shimmer"></div>
        <div className="news-content">
          <div className="skeleton title shimmer"></div>
          <div className="skeleton text shimmer"></div>
          <div className="skeleton text shimmer" style={{ width: '70%' }}></div>
        </div>
      </div>
    ));
  };

  return (
    <div className="shimmer-wrapper">
      <div className="featured-gallery skeleton">
        <div className="featured-main skeleton shimmer"></div>
        <div className="featured-thumbnails skeleton">
          <div className="skeleton shimmer" style={{ flex: 1 }}></div>
          <div className="skeleton shimmer" style={{ flex: 1 }}></div>
          <div className="skeleton shimmer" style={{ flex: 1 }}></div>
          <div className="skeleton shimmer" style={{ flex: 1 }}></div>
        </div>
      </div>
      <div className="news-feed">
        <h2 className="feed-title">More Stories</h2>
        <div className="news-grid">
          {renderSkeletonItems()}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
