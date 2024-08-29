import React from "react";

const ClientReview = () => {
  const clientReview = [
    {
      id: 1,
      name: "Joe Root",
      profession: "UI/UX Designer",
      review:
        "I love Dwelling! They make it super easy and safe to find a room for rent. Customer service is very quick and helpful. Highly recommend this platform. Really a great and wonderful platform to find rooms and houses in quick time.",
      image: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 2,
      name: "Ben Stokes",
      profession: "Frontend Developer",
      review:
        "I love Dwelling! They make it super easy and safe to find a room for rent. Customer service is very quick and helpful. Highly recommend this platform. Really a great and wonderful platform to find rooms and houses in quick time.",
      image: "https://i.pravatar.cc/40?img=2",
    },
    {
      id: 3,
      name: "Jofra Archer",
      profession: "Backend Developer",
      review:
        "I love Dwelling! They make it super easy and safe to find a room for rent. Customer service is very quick and helpful. Highly recommend this platform. Really a great and wonderful platform to find rooms and houses in quick time.",
      image: "https://i.pravatar.cc/40?img=3",
    },
  ];

  return (
    <div id="ClientReview" className="bg-neutral-200 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 p-10 h-full">
      <div className="text-center mb-10 border-4 border-black dark:border-gray-700 rounded-xl py-10 max-w-xl mx-auto">
        <p className="text-3xl font-bold mb-2">
          “Keep it simple, stupid (KISS)”
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          KISS-Prinzip von Ockhams Rasiermesser
        </p>
        <button className="mt-4 px-6 py-2 bg-slate-800 rounded-full text-white hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors">
          Contact Us
        </button>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-semibold mb-6">What clients say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientReview.map((client) => (
            <div
              key={client.id}
              className="max-w-xs mx-auto p-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg text-left transform hover:scale-105 hover:border-2 hover:border-black transition-transform duration-300"
            >
              <p className="mb-4">{client.review}</p>
              <div className="flex items-center">
                <img
                  src={client.image}
                  alt={`Profile picture of ${client.name}`}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">{client.name}</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {client.profession}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
