import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DependenciesContext } from "dependenciescontext";
import { IntroPage } from "./IntroPage";
import Profile from './img/Profile.png'


describe("Tests for IntroPage", () => {

    const aboutText = 'Hello there! My name is Ethan Domingo'

    it('Should contain main profile image', async () => {
        render(
            <DependenciesContext.Provider value={{Profile}}>
                <IntroPage />
            </DependenciesContext.Provider>
        )
        const profileImage = screen.getByRole('img');
        expect(profileImage).toHaveProperty('alt', 'ProfilePic');
    });

    it('Should contain Intro Text', async () => {
        render(
            <DependenciesContext.Provider value={{Profile}}>
                <IntroPage />
            </DependenciesContext.Provider>
        )
        const profileImage = screen.getByText(aboutText);
        expect(profileImage).toBeTruthy();
    });
})