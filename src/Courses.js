import React from "react";
import Course from "./Course";
export default function Courses({ courses, removeCourse }) {
  return (
    <div className="courseMainDiv">
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div className="cardDiv">
        {courses.map((course) => (
          <Course key={course.id} {...course} removeOnCourse={removeCourse} />
        ))}
      </div>
    </div>
  );
}
