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
      price: "₹80",
      img: imageOne,
    },
    {
      title: "Delicious Pasta",
      description: "A delightful pasta dish with fresh ingredients.",
      price: "₹180",
      img: imageTwo,
    },
    {
      title: "Gourmet Burger",
      description: "A juicy burger with fresh toppings.",
      price: "₹200",
      img: imageThree,
    },
    {
      title: "Exotic Pizza",
      description: "A pizza with unique and exotic flavors.",
      price: "₹300",
      img: imageFour,
    },
    {
      title: "Classic Pancakes",
      description: "Soft and fluffy pancakes with maple syrup.",
      price: "₹150",
      img: imageFive,
    },
    {
      title: "Exotic Salad",
      description: "A fresh and vibrant salad with unique ingredients.",
      price: "₹100",
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

        {/* Intro Section with Article Prose */}
        <article className="prose lg:prose-xl text-center mb-12">
          <h1 className="text-4xl font-extrabold">Welcome to Our Menu</h1>
          <p>
            Explore our wide range of delectable dishes, each crafted with fresh ingredients to satisfy your taste buds. From refreshing drinks to gourmet meals, we have something for everyone!
          </p>
        </article>

        {/* Title with Lottie Animation */}
        <div className="flex items-center mb-8">
          <h1 className="text-3xl font-bold mr-4">Our Menu</h1>
          <Lottie animationData={animationData} loop={true} className="w-12 h-12" />
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl h-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <figure className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: `url(${card.img})` }}></figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-semibold">{card.title}</h2>
                <p>{card.description}</p>
                <p className="text-lg font-bold text-primary">{card.price}</p>
                <div className="card-actions justify-end mt-4">
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
