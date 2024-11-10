import React from 'react';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";;
import animationData from '../assets/Animation - 1731218580905.json';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
    >
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      {/* Lottie Animation */}
      <div className="w-3/4 sm:w-1/2 lg:w-1/3 mb-6">
        <Lottie animationData={animationData} loop={true} />
      </div>

      <article className='prose text-center'>
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Welcome to Food Paradise</h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl">
        Discover our wide selection of delicious and carefully crafted dishes. Whether you're
        looking for a quick bite or a gourmet meal, we have something for every taste.
      </p>
    </article>
    </div>
    </motion.div>
  );
};

export default Home;
