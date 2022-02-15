import React from "react";
import { IHeaderProps } from "../../models/header.props";
import styles from "./Header.module.scss";

export const Header = (props: IHeaderProps) => {
  return (
    <div className={styles.header} onMouseLeave={() => alert("Hello World! ")}>
      <img src={props.logo} alt="logo" />
      <div>{props.title}</div>
    </div>
  );
};
