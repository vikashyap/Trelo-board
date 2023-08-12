import React, { FC } from "react";

const getRandomColor = () => {
  const colors = [
    "#007bff",
    "#e83e8c",
    "#17a2b8",
    "#28a745",
    "#ffc107",
    "#dc3545",
    "#6c757d",
    "#007bff",
    "#e83e8c",
    "#17a2b8",
    "#28a745",
    "#ffc107",
    "#dc3545",
    "#6c757d",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

interface StyledH2Props extends React.PropsWithChildren {}

const StyledH2: FC<StyledH2Props> = ({ children }) => {
  const randomColor = getRandomColor();

  const h2Style = {
    backgroundColor: randomColor,
    color: "#fff",
    padding: "4px 12px",
    borderRadius: "20px",
    display: "inline-block",
    margin: 0,
    fontSize: "1rem",
  };

  return <h2 style={h2Style}>{children}</h2>;
};
// used memo to prevent unnecessary re-renders
export default React.memo(StyledH2);
