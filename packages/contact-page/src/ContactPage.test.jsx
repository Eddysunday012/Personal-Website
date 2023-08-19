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

  it("should have a box rendered", async () => {
    render(
      <DependenciesContext.Provider>
        <ContactPage />
      </DependenciesContext.Provider>
    );
    const foundBox = await screen.findByLabelText("Contact Box");
    expect(foundBox).toBeTruthy();
  });

  it("should have all input areas found", async () => {
    render(
      <DependenciesContext.Provider>
        <ContactPage />
      </DependenciesContext.Provider>
    );

    const foundEmailInput = await screen.findByLabelText("Email Input");
    expect(foundEmailInput).toBeTruthy();

    const foundMessageInput = await screen.findByLabelText("Message Input");
    expect(foundMessageInput).toBeTruthy();
  });
});
