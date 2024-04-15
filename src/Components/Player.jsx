import React, { useState } from "react";
import { Button, Input } from "@mui/material";

const Player = ({ name, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false); 

  function handleClick() {
    setIsEditing((isEditing) => !isEditing);
    setPlayerName(playerName);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  return (
    <div>
      <li className={isActive ? "active" : undefined}>
        {isEditing === false ? (
          <span className="player-Name">{playerName}</span>
        ) : (
          <Input
            onChange={(e) => setPlayerName(e.target.value)}
            value={playerName}
          ></Input>
        )}
        <span className="player-Symbol">{symbol}</span>
        <Button onClick={handleClick}>{isEditing ? "save" : "Edit"}</Button>
      </li>
    </div>
  );
};

export default Player;
