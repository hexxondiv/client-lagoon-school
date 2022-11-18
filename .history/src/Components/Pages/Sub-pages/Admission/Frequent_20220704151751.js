import React, { useEffect, useState } from "react";
import Accordion from "../About/Accordion";

function Frequent({ noteData }) {
  const result = Object.values(noteData);
  return (
    <div className="table">
      <h4>Frequently Asked Questions</h4>
      <div className="accordion">
        {result.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
}

export default Frequent;
