import React, { useState, useEffect } from 'react';
import '../common.css';
import '../home-1-49.css';

const Home149 = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [activeNav, setActiveNav] = useState('Home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleNavClick = (navName) => {
    setActiveNav(navName);
  };

  const handleAddClick = () => {
    console.log('Add new item clicked');
  };

  const handleHeartClick = (e) => {
    e.currentTarget.classList.toggle('active');
  };

  return (
    <div className="screen-container">
      {/* Header */}
      <h1 className="logo typo-5">Foodgo</h1>
      <p className="subtitle typo-6">Order your favourite food!</p>
      
      {/* Profile Image */}
      <div className="profile-image-container">
        <div className="profile-image-mask"></div>
        <img src="/assets/figma_image_1_54.png" alt="Profile" className="profile-image" />
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <div className="search-bar">
          <div className="search-group">
            <img src="/assets/figma_image_1_61.svg" alt="Search" className="search-icon" />
            <span className="search-text typo-7">Search</span>
          </div>
          <div className="filter-button">
            <img src="/assets/figma_image_1_59.svg" alt="Filter" className="filter-icon" />
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="category-container">
        <div className="category-tabs">
          {['All', 'Combos', 'Sliders', 'Classic'].map((tab) => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              <span className={`typo-${activeTab === tab ? '8' : '9'}`}>{tab}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Food Cards Grid */}
      <div className="food-grid">
        {[
          {
            image: '/assets/figma_image_1_83.png',
            title: "Cheeseburger Wendy's Burger",
            rating: '4.9'
          },
          {
            image: '/assets/figma_image_1_92.png',
            title: 'Hamburger Veggie Burger',
            rating: '4.8'
          },
          {
            image: '/assets/figma_image_1_101.png',
            title: 'Hamburger Chicken Burger',
            rating: '4.6'
          },
          {
            image: '/assets/figma_image_1_110.png',
            title: 'Hamburger Fried Chicken Burger',
            rating: '4.5'
          }
        ].map((card, index) => (
          <div key={index} className="food-card">
            <img src={card.image} alt={card.title} className="food-image" />
            <div className="card-shadow"></div>
            <h3 className="food-title typo-10">{card.title}</h3>
            <div className="rating">
              <img src="/assets/figma_image_1_85.svg" alt="Star" className="star-icon" />
              <span className="rating-text typo-11">{card.rating}</span>
            </div>
            <img
              src="/assets/figma_image_1_80.svg"
              alt="Heart"
              className="heart-icon"
              onClick={handleHeartClick}
            />
          </div>
        ))}
      </div>

      {/* Navigation Bar */}
      <nav className="nav-bar">
        <img
          src="/assets/figma_image_1_123.svg"
          alt="Home"
          className={`nav-icon ${activeNav === 'Home' ? 'active' : ''}`}
          onClick={() => handleNavClick('Home')}
        />
        <img
          src="/assets/figma_image_1_124.svg"
          alt="User"
          className={`nav-icon ${activeNav === 'User' ? 'active' : ''}`}
          onClick={() => handleNavClick('User')}
        />
        <div className="add-button" onClick={handleAddClick}>
          <div className="add-icon">
            <span></span>
            <span></span>
          </div>
        </div>
        <img
          src="/assets/figma_image_1_125.svg"
          alt="Comment"
          className={`nav-icon ${activeNav === 'Comment' ? 'active' : ''}`}
          onClick={() => handleNavClick('Comment')}
        />
        <img
          src="/assets/figma_image_1_80.svg"
          alt="Heart"
          className={`nav-icon ${activeNav === 'Heart' ? 'active' : ''}`}
          onClick={() => handleNavClick('Heart')}
        />
      </nav>
    </div>
  );
};

export default Home149;
