import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DependenciesContext } from "dependenciescontext";
import { IntroPage } from "./IntroPage";
import Profile from './img/Profile.png'


describe("Tests for IntroPage", () => {

    it('Should contain main profile image', async () => {
        render(
            <DependenciesContext.Provider value={{Profile}}>
                <IntroPage />
            </DependenciesContext.Provider>
        )
        const profileImage = screen.getByRole('img');
        console.log(profileImage);
        expect(profileImage).toHaveProperty('alt', 'ProfilePic');
        expect(profileImage).toHaveProperty('src', '/src/img/Profile.png');
    })
})