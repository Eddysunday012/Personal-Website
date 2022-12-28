import React from "react";
import { DependenciesContext } from "dependenciescontext";

export const SkillsPage = () => {
    return(
        <DependenciesContext.Consumer>
            {(Skills) => (
                <div></div>
            )}
        </DependenciesContext.Consumer>
    )
}