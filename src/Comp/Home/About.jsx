import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to our website! We're passionate about movies, gadgets, and tech. 
          Our goal is to deliver high-quality reviews, latest updates, and in-depth analysis 
          to keep you informed and entertained. Whether you're a tech geek, movie buff, 
          or gadget lover — you're in the right place!
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be your go-to source for trustworthy and engaging content on all things tech and entertainment.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">What We Do</h3>
            <p className="text-gray-600">
              We research, review, and share the latest in movies, gadgets, and cyber news — so you don’t have to.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Who We Are</h3>
            <p className="text-gray-600">
              A small team of techies and film fanatics, working together to build an awesome, informative space online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
