import React from "react";
import { DependenciesContext } from "dependenciescontext";

export const ExperiencePage = () => {
  return (
    <DependenciesContext.Consumer>
      {({ experience, Skills }) => <div>Experience</div>}
    </DependenciesContext.Consumer>
  );
};
