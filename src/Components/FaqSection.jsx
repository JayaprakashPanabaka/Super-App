import React, { useState } from "react";
import downArrow from "../assets/downArrow.png";
import rightArrow from "../assets/rightArrow.png";

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4 m-3 bg-black text-white border-4 border-[#EEBB07] rounded-xl">
      <div
        className="flex justify-between cursor-pointer m-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        {isOpen ? (
          <img
            src={downArrow}
            alt="downArrow"
            className="bg-[#EEBB07] text-black rounded-full px-3 py-4 h-12 w-fit"
          />
        ) : (
          <img
            src={rightArrow}
            alt="rightArrow"
            className="bg-[#EEBB07] text-black rounded-full px-4 py-3 h-12 w-fit"
          />
        )}
      </div>
      {isOpen && (
        <div className="mt-2">
          <p className="p-4">{answer}</p>
        </div>
      )}
    </div>
  );
}

function FaqSection() {
  const faqs = [
    {
      question: "Career Planner Tool",
      answer:
        "ANY SKILL Is A Feature On Our Online Learning Platform That Allows People To Learn Any Skill, Like Computer Skills, Arts, Or Job-Related Skills",
    },
    {
      question: "How Does ANYSKILL Work?",
      answer:
        "ANY SKILL Is A Feature On Our Online Learning Platform That Allows People To Learn Any Skill, Like Computer Skills, Arts, Or Job-Related Skills",
    },
    {
      question: "What Is The Career Planner Feature?",
      answer:
        "ANY SKILL Is A Feature On Our Online Learning Platform That Allows People To Learn Any Skill, Like Computer Skills, Arts, Or Job-Related Skills",
    },
    {
      question: "How Can I Access The Career Planner Feature?",
      answer:
        "ANY SKILL Is A Feature On Our Online Learning Platform That Allows People To Learn Any Skill, Like Computer Skills, Arts, Or Job-Related Skills",
    },
    {
      question: "What Is The Career Planner Feature?",
      answer:
        "ANY SKILL Is A Feature On Our Online Learning Platform That Allows People To Learn Any Skill, Like Computer Skills, Arts, Or Job-Related Skills",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center">Our FAQs</h2>
      <p className="text-center text-xl font-semibold mb-8">Learn More From</p>
      <div>
        <div className="mt-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} {...faq} />
          ))}
        </div>
        <div className="text-right mt-4 flex justify-end">
          <button className="flex gap-10 items-center justify-between py-4 px-4 m-3 text-lg font-medium bg-black text-white border-4 border-[#EEBB07] rounded-xl">
            View More
            <img
              src={rightArrow}
              alt="rightArrow"
              className="bg-[#EEBB07] text-black rounded-full px-4 py-3 h-12 w-fit"
            />
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-center m-8">Our Features</h2>
        <div className="flex flex-col items-center justify-center gap-8 mb-8">
          <button className="flex gap-10 items-center justify-between py-2 px-10 m-3 text-2xl font-medium bg-black text-white border-4 border-[#EEBB07] rounded-full">
            <span>Technical Courses</span>
            <img
              src={rightArrow}
              alt="rightArrow"
              className="bg-[#EEBB07] text-black rounded-full px-4 py-3 h-12 w-fit"
            />
          </button>
          <button className="flex gap-10 items-center justify-between py-2 px-10 m-3 text-2xl font-medium bg-black text-white border-4 border-[#EEBB07] rounded-full">
            <span>Non-Technical</span>
            <img
              src={rightArrow}
              alt="rightArrow"
              className="bg-[#EEBB07] text-black rounded-full px-4 py-3 h-12 w-fit"
            />
          </button>
          <button className="flex gap-10 items-center justify-between py-2 px-10 m-3 text-2xl font-medium bg-black text-white border-4 border-[#EEBB07] rounded-full">
            <span>Vocational Courses</span>
            <img
              src={rightArrow}
              alt="rightArrow"
              className="bg-[#EEBB07] text-black rounded-full px-4 py-3 h-12 w-fit"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
