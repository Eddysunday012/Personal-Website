import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DependenciesContext } from "dependenciescontext";
import { SkillsPage } from "./SkillsPage";

const Skills = {}

describe('Tests for Skills Page', () => {
    it('Should render properly', () => {
        render(
            <DependenciesContext.Provider value={Skills}>
                <SkillsPage />
            </DependenciesContext.Provider>
        )
    });
})