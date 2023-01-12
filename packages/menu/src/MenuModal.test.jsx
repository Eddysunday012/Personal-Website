import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { NavbarModal } from "./MenuModal";
import { DependenciesContext } from "dependenciescontext";

describe("Test Suite for Menu Modal", () => {
  const pageList = ["About", "Skills", "Projects", "Contact"];
  let closeToggleDrawer = vi.fn();
  let toggleDrawer;

  it("should render properly", async () => {
    toggleDrawer = true;
    render(
      <DependenciesContext.Provider
        value={{ pageList, toggleDrawer, closeToggleDrawer }}
      >
        <NavbarModal />
      </DependenciesContext.Provider>
    );
  });

  it("should have all the pages in the modal", async () => {
    toggleDrawer = true;
    render(
      <DependenciesContext.Provider
        value={{ pageList, toggleDrawer, closeToggleDrawer }}
      >
        <NavbarModal />
      </DependenciesContext.Provider>
    );

    for await (const page of pageList) {
      let findPage = screen.findByText(page);
      expect(findPage).toBeTruthy();
    }
  });

  it("buttons in modal should call toggle drawer", async () => {
    closeToggleDrawer = vi.fn();
    toggleDrawer = true;
    render(
      <DependenciesContext.Provider
        value={{ pageList, toggleDrawer, closeToggleDrawer }}
      >
        <NavbarModal />
      </DependenciesContext.Provider>
    );

    const aboutButton = screen.getByRole("button", { name: /about/i });
    aboutButton.click();
    expect(closeToggleDrawer).toBeCalledTimes(1);
  });
});
