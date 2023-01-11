import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { NavbarModal } from "./MenuModal";
import { DependenciesContext } from "dependenciescontext";

describe("Test Suite for Menu Modal", () => {
  const pageList = ["About", "Skills", "Projects", "Contact"];
  const setToggleDrawer = vi.fn();
  let toggleDrawer;

  it("should render properly", async () => {
    toggleDrawer = true;
    render(
      <DependenciesContext.Provider
        value={{ pageList, toggleDrawer, setToggleDrawer }}
      >
        <NavbarModal />
      </DependenciesContext.Provider>
    );
  });

  it("should have all the pages in the modal", async () => {
    toggleDrawer = true;
    render(
      <DependenciesContext.Provider
        value={{ pageList, toggleDrawer, setToggleDrawer }}
      >
        <NavbarModal />
      </DependenciesContext.Provider>
    );

    pageList.forEach(async (page) => {
      let findPage = await screen.findByText(page);
      expect(findPage).toBeTruthy();
    });
  });

  it("should not show if toggleDrawer is false", async () => {
    toggleDrawer = false;
    render(
      <DependenciesContext.Provider
        value={{ pageList, toggleDrawer, setToggleDrawer }}
      >
        <NavbarModal />
      </DependenciesContext.Provider>
    );

    pageList.forEach(async (page) => {
      let findPage = await screen.findByText(page);
      expect(findPage).not.toBeTruthy();
    });
  });
});
