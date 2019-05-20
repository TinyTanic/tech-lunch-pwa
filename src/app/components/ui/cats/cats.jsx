import React from "react";
import cn from "classnames";

import CatCard from "../cat-card";

const Cats = ({ className, cats = [], ...props }) => (
  <div className={cn("cats", className)} {...props}>
    {cats.length
      ? cats.map(cat => (
          <CatCard key={cat.name} name={cat.name} image={cat.image} />
        ))
      : "No cats to display"}
  </div>
);

export default Cats;
