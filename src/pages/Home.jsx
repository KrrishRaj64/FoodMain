import React, { useState } from 'react';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import Accordion from '../components/Accordion';

const Home = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('promotional');

  // Sample data for each category (with prices added)
  const seasonalItems = [
    { title: 'Winter Special Pizza', description: 'A warm and hearty pizza with seasonal ingredients.', price: '$15.99', imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
    { title: 'Autumn Salad', description: 'A fresh salad with autumn vegetables and a tangy dressing.', price: '$10.99', imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' }
  ];

  const promotionalItems = [
    { title: 'Holiday Burger', description: 'A festive burger with cranberry sauce and turkey.', price: '$12.99', imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
    { title: 'Mango Smoothie', description: 'A refreshing tropical drink, perfect for summer.', price: '$6.99', imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' }
  ];

  const popularItems = [
    { title: 'Classic Spaghetti', description: 'A timeless pasta dish with rich tomato sauce.', price: '$14.99', imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
    { title: 'Margherita Pizza', description: 'A simple pizza with fresh mozzarella and basil.', price: '$11.99', imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' }
  ];

  // Get content based on active tab
  const getTabContent = () => {
    switch (activeTab) {
      case 'seasonal':
        return seasonalItems.map(item => (
          <div className="card glass w-96" key={item.title}>
            <figure>
              <img src={item.imageUrl} alt={item.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <p className="text-xl font-bold text-green-600">{item.price}</p> {/* Price tag */}
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy now!</button>
              </div>
            </div>
          </div>
        ));
      case 'promotional':
        return promotionalItems.map(item => (
          <div className="card glass w-96" key={item.title}>
            <figure>
              <img src={item.imageUrl} alt={item.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <p className="text-xl font-bold text-green-600">{item.price}</p> {/* Price tag */}
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy now!</button>
              </div>
            </div>
          </div>
        ));
      case 'popular':
        return popularItems.map(item => (
          <div className="card glass w-96" key={item.title}>
            <figure>
              <img src={item.imageUrl} alt={item.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <p className="text-xl font-bold text-green-600">{item.price}</p> {/* Price tag */}
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy now!</button>
              </div>
            </div>
          </div>
        ));
      default:
        return promotionalItems.map(item => (
          <div className="card glass w-96" key={item.title}>
            <figure>
              <img src={item.imageUrl} alt={item.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <p className="text-xl font-bold text-green-600">{item.price}</p> {/* Price tag */}
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy now!</button>
              </div>
            </div>
          </div>
        ));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Hero />
      <Timeline />
      
      <Accordion />
      
      {/* Tab Navigation */}
      <div role="tablist" className="tabs tabs-boxed w-full mb-8 mt-8">
        <a
          role="tab"
          className={`tab ${activeTab === 'seasonal' ? 'tab-active' : ''} text-xl font-medium`}
          onClick={() => setActiveTab('seasonal')}
        >
          Seasonal
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === 'promotional' ? 'tab-active' : ''} text-xl font-medium`}
          onClick={() => setActiveTab('promotional')}
        >
          Promotional
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === 'popular' ? 'tab-active' : ''} text-xl font-medium`}
          onClick={() => setActiveTab('popular')}
        >
          Popular
        </a>
      </div>

      {/* Tab Content */}
      <div className="w-full max-w-4xl flex flex-wrap justify-center gap-4">
        {getTabContent()}
      </div>
    </div>
  );
};

export default Home;
