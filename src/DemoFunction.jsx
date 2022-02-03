import React, { useState } from "react";

export const DemoFunction = () => {
  const [name, setName] = useState("Sohan");

  const onUpdateNameButtonClick = () => {
    setName("Rahul");
  };

  return (
    <div>
      <div>{name}</div>
      <button onClick={onUpdateNameButtonClick}>Update name</button>
    </div>
  );
};
