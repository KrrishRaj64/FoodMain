import React from 'react';
import imageOne from '../assets/one.jpg';
import imageTwo from '../assets/two.jpg';
import imageThree from '../assets/three.jpg';
import imageFour from '../assets/four.jpg';
import imageFive from '../assets/five.jpg';
import imageSix from '../assets/six.jpg';
import Lottie from "lottie-react";
import animationData from '../assets/Animation - 1731226949859.json';
import { motion } from 'framer-motion';


const Menu = () => {
  const cardData = [
    {
      title: "Refreshing Drink",
      description: "A cool and refreshing beverage to quench your thirst.",
      img: imageOne,
    },
    {
      title: "Delicious Pasta",
      description: "A delightful pasta dish with fresh ingredients.",
      img: imageTwo,
    },
    {
      title: "Gourmet Burger",
      description: "A juicy burger with fresh toppings.",
      img: imageThree,
    },
    {
      title: "Exotic Pizza",
      description: "A pizza with unique and exotic flavors.",
      img: imageFour,
    },
    {
      title: "Classic Pancakes",
      description: "Soft and fluffy pancakes with maple syrup.",
      img: imageFive,
    },
    {
      title: "Exotic Salad",
      description: "A fresh and vibrant salad with unique ingredients.",
      img: imageSix,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
    >
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      {/* Title with Lottie Animation */}
      <div className="flex items-center mb-8">
        <h1 className="text-3xl font-bold mr-4">Our Menu</h1>
        <Lottie animationData={animationData} loop={true} className="w-12 h-12" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl h-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl" 
          >
            <figure className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: `url(${card.img})` }}>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{card.title}</h2>
              <p>{card.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </motion.div>
  );
};

export default Menu;
