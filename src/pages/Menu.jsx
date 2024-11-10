import React from 'react';
import imageOne from '../assets/one.jpg';
import imageTwo from '../assets/two.jpg'; // Make sure the path and filename are correct
import imageThree from '../assets/three.jpg'; // Ensure the correct file
import imageFour from '../assets/four.jpg'; // Ensure the correct file
import imageFive from '../assets/five.jpg'; // Ensure the correct file
import imageSix from '../assets/six.jpg'; // Ensure the correct file
import Lottie from "lottie-react";
import animationData from '../assets/Animation - 1731226949859.json';

const Menu = () => {
  const cardData = [
    {
      title: "Refreshing Drink",
      description: "A cool and refreshing beverage to quench your thirst.",
      img: imageOne, // Use the imported image here
    },
    {
      title: "Delicious Pasta",
      description: "A delightful pasta dish with fresh ingredients.",
      img: imageTwo, // Use the imported image here
    },
    {
      title: "Gourmet Burger",
      description: "A juicy burger with fresh toppings.",
      img: imageThree, // Use the imported image here
    },
    {
      title: "Exotic Pizza",
      description: "Fresh greens with a light dressing.",
      img: imageFour, // Use the imported image here
    },
    {
      title: "Classic Pancakes",
      description: "Soft and fluffy pancakes with maple syrup.",
      img: imageFive, // Use the imported image here
    },
    {
      title: "Exotic Salad",
      description: "A cool drink for hot days.",
      img: imageSix, // Use the imported image here
    },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      {/* Title with Lottie Animation */}
      <div className="flex items-center mb-8">
        <h1 className="text-3xl font-bold mr-4">Our Menu</h1>
        <Lottie animationData={animationData} loop={true} className="w-12 h-12" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div key={index} className="card bg-base-100 shadow-xl h-full">
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
  );
};

export default Menu;
