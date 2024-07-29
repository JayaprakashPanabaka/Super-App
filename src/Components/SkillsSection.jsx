import React from "react";
import ProjectManagement from "../assets/ProjectManagement.png";
import DataSceienceCourse from "../assets/DataScienceCourse.png";
import DigitalMarketing from "../assets/DigitalMarketing.png";
import ratingStars from "../assets/ratingStars.png";

function CourseCard({ title, rating, image, buttonText }) {
  return (
    <div className="bg-black text-white rounded-3xl shadow-md p-6">
      <img
        src={image}
        alt={title}
        className="w-full h-52 rounded-t-2xl object-fit mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={ratingStars} alt="stars" className="h-3" />
          <span className="text-white font-bold ml-1">{rating}</span>
        </div>
        <button className="bg-[#FFD700] hover:bg-yellow-500 text-black font-bold py-2 border-4 border-white px-4 rounded-xl">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

function SkillsSection() {
  const courses = [
    {
      title: "Project Management",
      rating: 4.9,
      image: ProjectManagement,
      buttonText: "Know More",
    },
    {
      title: "Digital Marketing",
      rating: 4.9,
      image: DigitalMarketing,
      buttonText: "Know More",
    },
    {
      title: "Data Science Course",
      rating: 4.9,
      image: DataSceienceCourse,
      buttonText: "Know More",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center">
        What Skills Do You Want To Master?
      </h2>
      <p className="text-center text-lg mb-6">
        Enroll In Any Skill's Top Courses Today
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
