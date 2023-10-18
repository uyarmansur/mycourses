import React, { useState } from "react";
import Course from "./Course";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
export default function Courses({ courses }) {
  const [index, setIndex] = useState(0);
  const { title, price, content } = courses[index];

  console.log(index);
  const checkIndex = (i) => {
    if (i < 0) {
      return courses.length - 1;
    }
    if (i > courses.length - 1) {
      return 0;
    }
    return i;
  };

  const prevCourse = () => {
    setIndex(() => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const nextCourse = () => {
    setIndex(() => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const getRandomCourse = () => {
    let randomNumber = Math.floor(Math.random() * courses.length - 1);
    console.log("randomNumber" + randomNumber);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkIndex(randomNumber));
  };
  return (
    <div className="courseMainDiv">
      <div>
        <h2 style={{ textAlign: "center" }}>Kurslarım</h2>
        <button className="cardChangeBtn" onClick={() => getRandomCourse()}>
          Rastgele Kurs Ata
        </button>
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
        <button className="prevNext" onClick={() => nextCourse()}>
          <FaChevronRight />
        </button>
        {/* {courses.map((course) => (
          <Course key={course.id} {...course} removeOnCourse={removeCourse} />
        ))} */}
      </div>
    </div>
  );
}
