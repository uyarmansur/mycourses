import React from "react";

export default function Course({ id, content, title, price, removeOnCourse }) {
  console.log(id, content);
  return (
    <div className="card">
      <div className="cardTitlePrice">
        <h2 className="cardTitle">{title}</h2>
        <h4 className="cardPrice">{price} TL</h4>
      </div>
      <p>{content}</p>
      <button className="cardDeleteBtn" onClick={() => removeOnCourse(id)}>
        Sil
      </button>
    </div>
  );
}
