import React, { useState } from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const [cendrol, setCendrol] = useState(2);

  return (
    <div>
      <ComponentB cendrol={cendrol} setCendrol={setCendrol} />
    </div>
  );
};

export default ComponentA;
