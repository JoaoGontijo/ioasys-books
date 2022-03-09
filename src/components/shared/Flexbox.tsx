import React from "react";
import { IFlexbox } from "./types";

const Flexbox: React.FC<IFlexbox> = ({
  flexDirection,
  alignItems,
  justifyContent,
  margin,
  padding,
  width,
  height,
  backgroundColor,
  border,
  borderRadius,
  children,
  backgroundImage,
  overflowY,
  flexFlow,
  flexWrap,
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: flexDirection || "row",
        alignItems: alignItems || "stretch",
        justifyContent: justifyContent || "flex-start",
        margin: margin || "0",
        padding: padding || "0",
        width: width || "auto",
        height: height || "auto",
        backgroundImage: `url(${backgroundImage})` || "none",
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left top",
        backgroundColor: backgroundColor || "transparent",
        border: border || "none",
        borderRadius: borderRadius || "unset",
        overflowY: overflowY || "visible",
        flexFlow: flexFlow || "row wrap",
        flexWrap: flexWrap || "wrap",
        WebkitBackgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
};

export default Flexbox;
