import React from 'react';
import checkmark from '../assets/Tick-Square.png';

const AnySkillFeatures = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Learn with AnySkill, The AI-Powered Super App, And Grow
        </h1>
        <div className="space-y-4">
          <FeatureItem 
            title="Career PlannerTool:" 
            description="Personalized Guidance To Discover Your Ideal Career Path."
          />
          <FeatureItem 
            title="Extensive Course Library:" 
            description="Over 24,000 Courses Across Various Fields."
          />
          <FeatureItem 
            title="Flexible Subscription Plans:" 
            description="Monthly, Quarterly, Half-Yearly, And Yearly Options."
          />
          <FeatureItem 
            title="Industry-Recognized Certifications:" 
            description="Boost Your Resume And Professional Profile."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ title, description }) => {
  return (
    <div className="flex items-center p-4 bg-black text-white rounded-lg shadow-lg">
      <img src={checkmark} alt="Checkmark" className="w-6 h-6 mr-4" />
      <div>
        <h2 className="text-xl text-yellow-400">{title}</h2>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

export default AnySkillFeatures;
