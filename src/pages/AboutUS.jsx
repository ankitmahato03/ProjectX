import React from 'react';
import teamData from '../data/ourTeam.json';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/pngs/team-work.jpg"
            alt="About Us"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto py-24 px-6 sm:py-32 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Meet Our Team
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {teamData.ourTeams.map((item, _index) => (
              <div key={_index} className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  className="h-32 w-32 rounded-full mx-auto"
                  src={item.image}
                  alt={item.title}
                />
                <h3 className="mt-6 text-lg font-medium text-gray-900 text-center">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Join Our Journey
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-indigo-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="mt-8 inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
