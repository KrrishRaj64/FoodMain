import React, { useState } from 'react';

const About = () => {
  const [review, setReview] = useState('');
  const [name, setName] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    alert(`Review Submitted: \nName: ${name}\nReview: ${review}`);
    setReview('');
    setName('');
  };

  const randomQuote = "“The only thing we have to fear is running out of good food.”";



  return (
    <div className="flex flex-col lg:flex-row p-8 gap-8">
      {/* About Section - Left half */}
      <div className="flex-1">
        <article className="prose lg:prose-xl">
          <h1 className="text-4xl font-bold">Welcome to Food Paradise</h1>
          <p className="text-lg mt-4">
            At Food Paradise, we believe that food is more than just a meal — it's an experience. From the moment you walk in, 
            you're greeted by the aroma of freshly prepared dishes, the sound of sizzling delights, and the smiles of our 
            passionate chefs and staff. We’ve carefully curated a menu that offers something for every taste, whether you're 
            craving a savory entrée, a refreshing drink, or a sweet indulgence. 
          </p>
          <p className="text-lg mt-4">
            Food Paradise isn’t just about eating; it's about celebrating culinary creativity. Our ingredients are sourced 
            locally, ensuring freshness in every bite. Whether it's our hand-tossed salads, sizzling pastas, or indulgent desserts, 
            we take pride in crafting each dish with care. We also cater to a wide variety of dietary needs, from vegetarian to 
            gluten-free options, so everyone can find something to enjoy.
          </p>
          <p className="text-lg mt-4">
            But it's not just about the food. It's about the ambiance too. With cozy seating, a welcoming atmosphere, and 
            a friendly staff, Food Paradise is the perfect place to enjoy a meal with family, friends, or even colleagues. 
            We’re dedicated to offering an unforgettable dining experience that leaves you craving more.
          </p>
          <blockquote className=" mt-8 p-4 bg-gray-800 border-l-4 border-blue-500 italic">
            <p className="text-xl">
              {randomQuote}
            </p>
            <footer className="mt-4 text-lg text-right text-gray-300 font-medium bg-gray-800">
            - Aravind P Sagar
          </footer>
          </blockquote>
          
        </article>
      </div>

      {/* Contact Section - Right half */}
      <div className="flex-1 ">
      <article className="prose lg:prose-xl">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-lg mt-4">
            Have any questions? Want to know more about our menu, special offers, or catering services? Get in touch with us 
            and we'll be happy to assist you. We're here to make your dining experience as enjoyable as possible.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Our Address</h3>
            <p className="text-lg mt-2">456 Gourmet Street, Foodville, Countryland</p>
            <h3 className="text-xl font-semibold mt-6">Email Us</h3>
            <p className="text-lg mt-2">contact@foodparadise.com</p>
            <h3 className="text-xl font-semibold mt-6">Call Us</h3>
            <p className="text-lg mt-2">(987) 654-3210</p>
          </div>

          <h2 className="text-3xl font-semibold">Leave a Review</h2>
          <form onSubmit={handleReviewSubmit} className="space-y-4 mt-6">
            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-control">
              <label htmlFor="review" className="label">
                <span className="label-text">Your Review</span>
              </label>
              <textarea
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="textarea textarea-bordered w-full"
                placeholder="Write your review here"
                required
              ></textarea>
            </div>

            <div className="form-control mt-4">
              <button type="submit" className="btn btn-primary w-full">
                Submit Review
              </button>
            </div>
          </form>
      </article>
      </div>
    </div>
  );
};

export default About;
