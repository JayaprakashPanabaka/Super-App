import React from 'react';
import Assignments from '../assets/Assignments.png'
import Certification from '../assets/Certification.png'
import CareerPlanner from '../assets/CareerPlanner.png' 
import CodingGround from '../assets/CodingGround.jpeg'
import FAQ from '../assets/FAQ.png'
import MCQ from '../assets/MCQ.png'
import MockExam from '../assets/MockExam.png'
import OnlineExam from '../assets/OnlineExam.png'
import PersonalPanel from '../assets/PersonalPanel.png'
import Practicals from '../assets/Practicals.png'
import Project from '../assets/Project.png'
import TopicTest from '../assets/TopicTest.png'
import QuickTest from '../assets/QuickTest.png'

function FeatureCard({ title, icon }) {
  return (
    <div className="flex items-center justify-start gap-5 bg-black text-white rounded-xl p-3 border-4 border-[#EBE100]">
      <img src={icon} alt={title} className="w-12 h-12" />
      <span className="text-lg font-bold">{title}</span>
    </div>
  );
}

function OurFeatures() {
  const features = [
    { title: 'Assignments', icon: Assignments },
    { title: 'Certification', icon: Certification },
    { title: 'Career Planner', icon: CareerPlanner },
    { title: 'Coding Ground', icon: CodingGround },
    { title: 'FAQ', icon: FAQ },
    { title: 'MCQ', icon: MCQ },
    { title: 'Mock Exam', icon: MockExam },
    { title: 'Online Exam', icon: OnlineExam },
    { title: 'Personal Panel', icon: PersonalPanel },
    { title: 'Practicals', icon: Practicals },
    { title: 'Project', icon: Project },
    { title: 'Short Notes', icon: Certification },
    { title: 'Theory Classes', icon: Assignments },
    { title: 'Topic Test', icon: TopicTest },
    { title: 'Quick Test', icon: QuickTest },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-8">Our Features</h2>
      <div className="grid grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}

export default OurFeatures;
