import React from "react";
import AgileProjectManagement from "../assets/AgileProjectManagement.png";
import PythonDeveloper from "../assets/PythonDeveloper.png";
import ArtificialIntelligence from "../assets/ArtificialIntelligence.png";
import ratingStars from "../assets/ratingStars.png";

function CourseCard({ title, rating, image, buttonText }) {
  return (
    <div className="bg-black text-white rounded-3xl shadow-md p-6">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-fit mb-4 rounded-t-2xl"
      />
      <hr />
      <h2 className="text-xl font-bold m-2">{title}</h2>
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

function CourseSection() {
  const courses = [
    {
      title: "Agile Project Management",
      rating: 4.9,
      image: AgileProjectManagement,
      buttonText: "Know More",
    },
    {
      title: "Python Developer",
      rating: 4.9,
      image: PythonDeveloper,
      buttonText: "Know More",
    },
    {
      title: "Artificial Intelligence",
      rating: 4.9,
      image: ArtificialIntelligence,
      buttonText: "Know More",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center">
        Stand Out In The Crowd:
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

export default CourseSection;
