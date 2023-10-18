import React, { useState } from "react";
import Course from "./Course";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
export default function Courses({ courses, removeCourse }) {
  const [index, setIndex] = useState(0);
  const { title, price, content } = courses[index];

  const checkIndex = (index) => {
    if (index < 0) {
      return courses.length - 1;
    }
    return index;
  };

  const prevCourse = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  return (
    <div className="courseMainDiv">
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div className="cardDiv">
        <button className="prevNext" onClick={() => prevCourse()}>
          <FaChevronLeft />
        </button>
        <div className="card">
          <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <h4 className="cardPrice">{price} TL</h4>
          </div>

          <p>{content}</p>
        </div>
        <button className="prevNext">
          <FaChevronRight />
        </button>
        {/* {courses.map((course) => (
          <Course key={course.id} {...course} removeOnCourse={removeCourse} />
        ))} */}
      </div>
    </div>
  );
}
