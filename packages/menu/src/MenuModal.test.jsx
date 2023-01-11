import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { NavbarModal } from "./MenuModal";
import { DependenciesContext } from "dependenciescontext";

const pageList = ["About", "Skills", "Projects", "Contact"];

describe("Test Suite for Menu Modal", () => {
  it("should render properly", async () => {
    render(
      <DependenciesContext.Provider value={{ pageList }}>
        <NavbarModal />
      </DependenciesContext.Provider>
    );
  });

  it("should have all the pages in the modal", async () => {
    render(
      <DependenciesContext.Provider value={{ pageList }}>
        <NavbarModal />
      </DependenciesContext.Provider>
    );

    for (const page in pageList) {
      let findPage = screen.findByText(page);
      expect(findPage).toBeTruthy();
    }
  });
});
