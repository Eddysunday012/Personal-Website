import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DependenciesContext } from "dependenciescontext";
import { Footer } from "./Footer";

describe('Testing suite for footer', () => {

    it('Should render properly', async () => {
        render(
            <DependenciesContext.Provider>
                <Footer />
            </DependenciesContext.Provider>
        )
    });

    it('Should have label for footer', async () => {
        render(
            <DependenciesContext.Provider>
                <Footer />
            </DependenciesContext.Provider>
        )
        const footerLabel = screen.findByLabelText('Footer');
        expect(footerLabel).toBeTruthy();
    });


})