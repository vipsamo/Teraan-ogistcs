import React, { useState } from "react";

const Readmore = ({ children, maxCharacterCount = 200 }) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const text = children;
  const stringResult = isTruncated ? text.slice(0, maxCharacterCount) : text;
  const handleReadmore = () => {
    setIsTruncated(!isTruncated);
  };
  return (
    <div>
      {stringResult}
      <br />
      <button className="bg-indigo-500 text-zinc-100 rounded p-2" onClick={handleReadmore}>
        {isTruncated ? "Read More" : "Read Less"} <span>&raquo;</span>
      </button>
      
    </div>
  );
};

export default Readmore;