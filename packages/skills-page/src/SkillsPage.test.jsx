import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import { DependenciesContext } from "dependenciescontext";
import { SkillsPage } from "./SkillsPage";

const SKILLS_RANGE = [
    "Proficient", "Competent", "Novice"
]

const Skills = [
    {
        "Name": "Python",
        "Years": 7,
        "Percentage": 95,
        "Type": SKILLS_RANGE[0]
    },
    {
        "Name": "C",
        "Years": 3,
        "Percentage": 90,
        "Type": SKILLS_RANGE[0]
    },
    {
        "Name": "Java",
        "Years": 3,
        "Percentage": 90,
        "Type": SKILLS_RANGE[0]
    },
    {
        "Name": "Javascript",
        "Years": 4,
        "Percentage": 90,
        "Type": SKILLS_RANGE[0]
    }
]

describe('Tests for Skills Page', async () => {
    it('Should render properly', async () => {
        render(
            <DependenciesContext.Provider value={{Skills}}>
                <SkillsPage />
            </DependenciesContext.Provider>
        )
    });

    it('Should have a Skills Title', async () => {
        render(
            <DependenciesContext.Provider value={{Skills}}>
                <SkillsPage />
            </DependenciesContext.Provider>
        )
        const skillsTitle = await screen.findByText('Skills');
        expect(skillsTitle).toBeTruthy();
    });

    it('Should contain all the Skills listed', async () => {
        render(
            <DependenciesContext.Provider value={{Skills}}>
                <SkillsPage />
            </DependenciesContext.Provider>
        )
        const findSkill = await screen.findByText(Skills[0].Name);
        expect(findSkill).toBeTruthy();
    })
})