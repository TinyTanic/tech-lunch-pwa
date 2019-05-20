import React from "react";
import cn from "classnames";

const CatCard = ({ name, image, className, ...props }) => (
  <div className={cn("cat-card", className)} {...props}>
    <div className="cat-image" style={{ backgroundImage: `url("${image}")` }} />
    <div className="cat-name">{name}</div>
  </div>
);

export default CatCard;
