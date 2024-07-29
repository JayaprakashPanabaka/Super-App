import React from "react";
import footerImg from '../assets/footerImg.png'

function Footer() {
  const aboutUsItems = [
    "Who We Are",
    "Contact Us",
    "Terms of use",
    "FAQs",
    "Privacy Policy",
    "Refund Policy",
    "Terms & Conditions",
  ];
  const databaseTechnologies = [
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "SQLite",
    "Oracle",
    "MariaDB",
    "Apache Cassandra",
  ];
  const languages = [
    "C Language",
    "C++ language",
    "Java",
    "C#",
    "Python",
    "Ruby",
    "Swift",
    "Kotlin",
    "Dart",
    "Perl",
  ];
  const webTechnologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "Vue.Js",
    "Web Programming",
    "Jquery",
    "React Js",
    "Angular js",
    "Tailwind CSS",
    "Next Js",
  ];
  const backEndTechnologies = [
    "Express Js",
    "PHP",
    "Node Js",
    "Flask",
    "Django",
    "Spring Boot",
    "ASP.Net",
  ];
  const machineLearningTopics = [
    "Machine Learning",
    "Deep Learning",
    "Java",
    "Natural Language Processing",
    "Computer Vision",
    "Reinforcement Learning",
    "Expert Systems",
    "Genetic Algorithms",
    "Fuzzy Logic",
    "Robotics",
  ];

  return (
    <div className="container mx-auto p-6 bg-black text-white">
      <div className="flex gap-16 mb-8">
        <img src={footerImg} alt="logo" className="h-16" />
        <p>
          Thelearnyn is an educational platform striving to provide the best
          learning material on technical, non-technical and vocational subjects.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">About Us</h2>
          <ul className="list-disc list-inside">
            {aboutUsItems.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">DATABASE TECHNOLOGIES</h2>
          <ul className="list-disc list-inside">
            {databaseTechnologies.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">LANGUAGES</h2>
          <ul className="list-disc list-inside">
            {languages.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">WEB TECHNOLOGIES</h2>
          <ul className="list-disc list-inside">
            {webTechnologies.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">BACK-END</h2>
          <ul className="list-disc list-inside">
            {backEndTechnologies.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">MACHINE LEARNING</h2>
          <ul className="list-disc list-inside">
            {machineLearningTopics.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-3 text-center border-t-2 border-white">
        <p className="text-2xl pt-3">SMART WAY OF LEARNING</p>
      </div>
    </div>
  );
}

export default Footer;
