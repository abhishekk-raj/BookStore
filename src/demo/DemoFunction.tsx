import React, { useState } from "react";

interface IProps {
  compName: string;
}

export const DemoFunction = (props: IProps) => {
  const [name, setName] = useState("Sohan");
  const [deg, setDeg] = useState("SE");

  const onUpdateNameButtonClick = () => {
    setName("Rahul");
  };

  return (
    <div>
      <div>{name}</div>
      <div>{props.compName}</div>
      <button onClick={onUpdateNameButtonClick}>Update name</button>
    </div>
  );
};
