import React from "react";
import classnames from "classnames/bind";

import style from "./styles.scss";

const moduleName = "Navigation";
const cx = classnames.bind(style);
const Navigation = ({}) => {
  return <div className={cx(`${moduleName}`)}>Navigation</div>;
};

export default Navigation;
