import React from 'react';

export default function CoworkingPricing() {
  const pricingPlans = [
    {
      price: '80,000',
      title: 'Private Room',
      features: [
        'High speed internet',
        'Electricity with backup',
        'Tea and Coffee',
        'Front desk services',
        'Access to common areas',
        'Meeting and printing quotas',
        'Parking'
      ]
    },
    {
      price: '120,000',
      title: 'Enterprise Offices',
      features: [
        'High speed internet',
        'Electricity with backup',
        'Tea and Coffee',
        'Front desk services',
        'Access to common areas',
        'Meeting and printing quotas',
        'Parking'
      ],
      highlighted: true
    }
  ];

  const roomPlans = [
    { persons: 4, price: '80,000' },
    { persons: 6, price: '120,000' },
    { persons: 8, price: '160,000' }
  ];

  return (
    <div className="min-h-screen bg-black text-white mt-30">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        {/* Header and Pricing Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-20">
          {/* Left Side - Header */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <p className="text-yellow-400 text-sm md:text-base mb-4 font-semibold">Core Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Giving Your<br />
              Business A<br />
              Place To<br />
              Innovate
            </h1>
          </div>

          {/* Right Side - Pricing Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden ${
                  plan.highlighted ? 'ring-2 ring-yellow-400' : 'ring-2 ring-yellow-500'
                }`}
              >
                {/* Price Header */}
                <div className="bg-black border-b border-yellow-500 px-6 py-4">
                  <p className="text-white text-xl md:text-2xl font-semibold">
                    {plan.price}/ Month
                  </p>
                </div>

                {/* Card Body */}
                <div className="bg-white text-black p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-8">{plan.title}</h3>
                  
                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-base md:text-lg">
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Subscribe Button */}
                  <button className="w-full bg-black text-yellow-400 px-8 py-3 rounded font-semibold text-lg hover:bg-gray-900 transition-colors">
                    Subscribe Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Room Plans Section */}
        <div className="bg-gradient-to-br from-black-900 to-black rounded-2xl p-8 md:p-12 ring-2 ring-yellow-500">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Private Offices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {roomPlans.map((room, index) => (
              <div
                key={index}
                className="bg-black rounded-xl p-6 border-2 border-yellow-400 "
              >
                <div className="text-center">
                  <p className="text-yellow-400 text-lg font-semibold mb-2">
                    {room.persons} Persons
                  </p>
                  <p className="text-3xl md:text-4xl font-bold text-white">
                    {room.price} <span className="text-xl text-gray-400">PKR</span>
                  </p>
                  <p className="text-gray-400 mt-1">per month</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Text */}
          <div className="text-center">
            <p className="text-xl md:text-2xl text-gray-300">
              For larger room or whole floor{' '}
              <span className="text-yellow-400 font-semibold cursor-pointer hover:underline">
                visit us
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}