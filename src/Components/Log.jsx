import React from "react";

const Log = ({ turns }) => {
  return (
    <div>
      {turns.map((turn) => (
        <li
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          key={`${turn.square.rowindex} ${turn.square.colindex}`}
        >
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </div>
  );
};

export default Log;
