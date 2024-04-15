import { Button } from "@mui/material";
import React from "react";

const GameOver = ({ winner, onSelect }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div id="popUp">
          {winner && <p>GameOver {winner} won</p>}
          <br></br>
          {!winner && <p>It's Draw</p>}
          <Button style={{ color: "whitesmoke" }} onClick={onSelect}>
            Reset match
          </Button>
        </div>
      </div>
    </>
  );
};

export default GameOver;
