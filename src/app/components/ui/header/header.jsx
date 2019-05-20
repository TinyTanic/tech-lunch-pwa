import React from "react";
import cn from "classnames";

const Header = ({ className, children, ...props }) => (
  <div className={cn("header", className)} {...props}>
    <div className="title-container">
      <span className="title">{children}</span>
    </div>
  </div>
);

export default Header;
