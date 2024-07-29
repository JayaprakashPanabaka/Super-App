import React from 'react';

function PricingCard({ price, features }) {
  return (
    <div className="bg-black text-white rounded-xl shadow-md p-6 text-center">
      <h1 className='text-xl'>FOR 1 Month</h1>
      <h2 className="text-2xl text-[#FFD700] font-bold mb-4">₹{price}</h2>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="bg-[#FFD700] hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-xl border-4 border-white mt-4">
        Choose Plan
      </button>
    </div>
  );
}

function PricingSection() {
  const plans = [
    {
      price: 199,
      features: [
        'Course Description',
        'Theory Classes',
        'Short Notes',
        'Quick Test',
        'Online Exam',
        'Practicals',
        'Certification',
        'Assignment etc...'
      ]
    },
    {
      price: 499,
      features: [
        'Course Description',
        'Theory Classes',
        'Short Notes',
        'Quick Test',
        'Online Exam',
        'Practicals',
        'Certification',
        'Assignment etc...'
      ]
    },
    {
        price: 7999,
        features: [
          'Course Description',
          'Theory Classes',
          'Short Notes',
          'Quick Test',
          'Online Exam',
          'Practicals',
          'Certification',
          'Assignment etc...'
        ],
        buttonText: 'CHOOSE PLAN'
      },
      {
        price: 9999,
        features: [
          'Course Description',
          'Theory Classes',
          'Short Notes',
          'Quick Test',
          'Online Exam',
          'Practicals',
          'Certification',
          'Assignment etc...'
        ],
        buttonText: 'CHOOSE PLAN'
      },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center">Affordable Packages</h2>
      <p className="text-center text-xl font-semibold mb-8">Quality Experiences Within Your Budget</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {plans.map((plan, index) => (
          <PricingCard key={index} price={plan.price} features={plan.features} />
        ))}
      </div>
    </div>
  );
}

export default PricingSection;
