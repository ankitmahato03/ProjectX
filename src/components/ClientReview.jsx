
const ClientReview = () => {
  return (
    <div className="bg-black text-white p-10 h-screen">
      <div className="text-center mb-10 ">
        <p className="text-3xl font-bold">“Keep it simple, stupid (KISS)”</p>
        <p className="text-gray-500">KISS-Prinzip von Ockhams Rasiermesser</p>
        <button className="mt-4 px-6 py-2 bg-teal-500 rounded-full text-white hover:bg-teal-600">
          Contact Us
        </button>
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-6">What client say</h2>
        <div className="flex justify-center space-x-8">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="max-w-xs p-4 bg-gray-800 rounded-lg text-left">
              <p className="mb-4">
                “I love Dwelling! They make it super easy and safe to find a
                room for rent. Customer service is very quick and helpful.
                Highly recommend this platform. Really a great and wonderful
                platform to find rooms and houses in quick time.”
              </p>
              <div className="flex items-center">
                <img
                  src={`https://i.pravatar.cc/40?img=${index + 1}`}
                  alt="Client"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">Joe Root</p>
                  <p className="text-gray-400">UI/UX designer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientReview