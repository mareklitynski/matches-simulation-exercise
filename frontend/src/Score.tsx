import React from "react";

const Score: React.FC<{ children: [number, number] }> = ({ children }) => {
  const score = children.map((result) => (
    <span className="goals">{result}</span>
  ));

  return (
    <>
      {score[0]}:{score[1]}
    </>
  );
};

export default Score;
