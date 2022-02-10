import React from "react";
import { IHeaderProps } from "../../models/header.props";
import styles from "./Header.module.scss";

export const Header = (props: IHeaderProps) => {
  return <div className={styles.header}>{props.title}</div>;
};
