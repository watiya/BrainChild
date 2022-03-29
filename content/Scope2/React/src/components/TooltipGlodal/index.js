import React from "react";
import cn from "classnames";
import styles from "./TooltipGlodal.module.sass";
import Icon from "../Icon";
import ReactTooltip from "react-tooltip";

const TooltipGlodal = () => {
  return (
    <ReactTooltip
      className={styles.tooltipWpapper}
      effect="solid"
      border={true}
      borderColor="rgba(255, 255, 255, 0.12)"
      backgroundColor="#272B30"
      textColor="#F4F4F4"
    />
  );
};

export default TooltipGlodal;
