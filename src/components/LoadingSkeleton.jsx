import React from "react";
import "./LoadingSkeleton.css";

const LoadingSkeleton = ({ type = "card", count = 1 }) => {
  const renderSkeleton = () => {
    switch (type) {
      case "card":
        return (
          <div className="skeleton-card">
            <div className="skeleton-icon"></div>
            <div className="skeleton-title"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text short"></div>
          </div>
        );

      case "image":
        return <div className="skeleton-image"></div>;

      case "text":
        return (
          <div className="skeleton-text-block">
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text short"></div>
          </div>
        );

      case "team":
        return (
          <div className="skeleton-team">
            <div className="skeleton-avatar"></div>
            <div className="skeleton-title"></div>
            <div className="skeleton-text short"></div>
          </div>
        );

      default:
        return <div className="skeleton-default"></div>;
    }
  };

  return (
    <div className="skeleton-container">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="skeleton-item">
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
