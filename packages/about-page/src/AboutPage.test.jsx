import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DependenciesContext } from "dependenciescontext";
import { AboutPage } from "./AboutPage";

describe('Tests for About Page', () => {
    it('Should Render Properly', async () => {
        render(
            <AboutPage />
        )
    });

    it('Should Have About Me Label', async() => {
        render(
            <AboutPage />
        )
        const findBox = screen.getByLabelText('About Me');
        expect(findBox).toBeTruthy();
    })
})