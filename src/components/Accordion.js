import React, { useState } from "react";
import "./styles/accordion.css";

const dataCollection = [
  {
    question: "1. What is Lab and Box?",
    answer:
      "Lab and Box is a revolutionary virtual learning platform that offers practical and hands-on learning experiences through interactive courses and learning kits.",
  },
  {
    question:
      "2. What makes Lab and Box different from traditional e-learning platforms?",
    answer:
      "Lab and Box stand out from traditional e-learning platforms byincorporating interactive simulations, videos, and quizzes to create anengaging learning experience. Additionally, it offers practical learning kits with physical materials for hands-on activities.",
  },
  {
    question: "3. How can I access Lab and Box?",
    answer:
      "You can access Lab and Box through our web apps for both the store and the community. ",
  },
  {
    question: "4. What subjects and courses are available on Lab and Box?",
    answer:
      "Lab and Box offer a diverse selection of courses covering various subjects,including science, technology, engineering, mathematics, and more. ",
  },
  {
    question: "5. How does the practical learning kit work?",
    answer:
      "Courses with practical learning kits include physical materials, tools, and equipment required for hands-on activities. Users can purchase these kits alongside the course and perform experiments or build projects in a virtual manner. You can then upload your results for feedback and evaluation. ",
  },
  {
    question: "6. How do I engage with the Lab and Box community?",
    answer:
      "You can engage with the Lab and Box community by sharing your knowledge through blogs, participating in discussions, and joining interactive events like challenges and quizzes. ",
  },
  {
    question: "7. Is Lab and Box compatible with different devices?",
    answer:
      "Yes, Lab and Box are accessible across various devices, including desktops, laptops, tablets, and mobiles. You can learn and engage with the platform anytime and anywhere.",
  },
];

function Accordion() {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }

  return (
    <>
      <div className="flex justify-center flex-col items-center py-[60px] bg-[#f8f5ec]">
        <div className="text-center">
          <span className="accordion__title text-center font-extrabold text-[24px] mb-[70px]">
            Frequently asked questions
          </span>
        </div>
        <div className="accordion__faq mt-[60px]">
          {dataCollection.map((item, index) => (
            <div key={index} onClick={() => toggleAccordion(index)}>
              <div className="accordion__faq-heading">
                <h3 className={accordion === index ? "active" : ""}>
                  {item.question}
                </h3>
                <div>
                  {accordion === index ? (
                    <span className="verticle">-</span>
                  ) : (
                    <span className="horizental">+</span>
                  )}
                </div>
              </div>
              <div className="mt-5 ml-4">
                <p className={accordion === index ? "active" : "inactive"}>
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Accordion;
