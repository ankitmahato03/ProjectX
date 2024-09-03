import React from 'react'

const AboutUs = () => {
  return (
    <div id='About' className="flex flex-col lg:flex-row items-center justify-between bg-white py-16 px-6 lg:px-20 gap-8">
      {/* Left Side Image */}
      <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
        <div className="inset-0 bg-gradient-to-r from-slate-500 to-slate-800 opacity-75 rounded-full transform -translate-x-12 translate-y-16 w-full h-full flex-1 justify-center items-center"></div>
        <img
          src="/pngs/team-work.jpg"
          alt="Team working"
          className="z-10 rounded-full object-cover w-full h-full"
        />
      </div>

      {/* Right Side Content */}
      <div className="lg:w-1/2 w-full">
        <h4 className="text-black font-bold text-lg mb-2">About US</h4>
        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
          We are Working world With 15+ Years
        </h2>
        <p className="text-gray-600 mb-8">
          Duis leo. Sed fringilla mauris siamet nibh. odales sagittis magna. Sed
          consequat
        </p>

        {/* Buttons */}
        {/* 
        <div className="flex space-x-4 mb-8">
          <button className="bg-slate-800 text-white py-2 px-6 rounded-full">
            Our Mission
          </button>
          <button className="bg-slate-300 text-black py-2 px-6 rounded-full">
            Our Vision
          </button>
        </div>
        */}

        {/* Bullet Points */}
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center">
            <span className="bg-slate-800 text-white rounded-full h-3 w-3 mr-2"></span>
            Client happiness
          </div>
          <div className="flex items-center">
            <span className="bg-slate-800 text-white rounded-full h-3 w-3 mr-2"></span>
            Client happiness
          </div>
          <div className="flex items-center">
            <span className="bg-slate-800 text-white rounded-full h-3 w-3 mr-2"></span>
            World-class service
          </div>
          <div className="flex items-center">
            <span className="bg-slate-800 text-white rounded-full h-3 w-3 mr-2"></span>
            World-class service
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs