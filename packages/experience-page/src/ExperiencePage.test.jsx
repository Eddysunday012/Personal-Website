import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DependenciesContext } from "dependenciescontext";
import { ExperiencePage } from "./ExperiencePage";
import { Skills } from "./data/Skills";
import { experience } from "./data/experience";

describe("Testing suite for Experience Page", async () => {
  it("Should Render Properly", async () => {
    render(
      <DependenciesContext.Provider value={{ experience, Skills }}>
        <ExperiencePage />
      </DependenciesContext.Provider>
    );
  });
});
