import React from 'react';

function Statistics() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-semibold mb-4">Our Statistics</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-3xl font-bold">Courses</p>
          <p className="text-2xl font-bold text-yellow-500">24000+</p>
        </div>
        <div>
          <p className="text-3xl font-bold">Certificate</p>
          <p className="text-2xl font-bold text-yellow-500">1900+</p>
        </div>
        <div>
          <p className="text-3xl font-bold">Question Bank</p>
          <p className="text-2xl font-bold text-yellow-500">100000+</p>
        </div>
        <div>
          <p className="text-3xl font-bold">Google Rating</p>
          <p className="text-2xl font-bold text-yellow-500">4.9/5</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
