import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DependenciesContext } from "dependenciescontext";
import { ContactPage } from "./ContactPage";

describe("Testing suite for Contact Page", () => {
  it("should render properly", async () => {
    render(
      <DependenciesContext.Provider>
        <ContactPage />
      </DependenciesContext.Provider>
    );
  });

  it("should have all the forms rendered", async () => {
    render(
      <DependenciesContext.Provider>
        <ContactPage />
      </DependenciesContext.Provider>
    );
    const form = await screen.findByLabelText("Email Input");
    expect(form).toBeTruthy();
  });
});
