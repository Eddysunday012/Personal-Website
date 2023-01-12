import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Navbar } from "./Menu";
import { DependenciesContext } from "dependenciescontext";
import React from "react";

describe("Tests for menu", () => {
  let scrollFn = vi.fn();
  let setToggleDrawer = vi.fn();
  it("should render without errors", async () => {
    render(
      <DependenciesContext.Provider value={{ scrollFn, setToggleDrawer }}>
        <Navbar />
      </DependenciesContext.Provider>
    );
  });

  it("should have navbar label", async () => {
    scrollFn = vi.fn();
    render(
      <DependenciesContext.Provider value={{ scrollFn, setToggleDrawer }}>
        <Navbar />
      </DependenciesContext.Provider>
    );
    const navbar = screen.getByLabelText("Navbar");
    expect(navbar).toBeTruthy();
  });

  it("should have labels for all 4 sections", async () => {
    scrollFn = vi.fn();
    render(
      <DependenciesContext.Provider value={{ scrollFn, setToggleDrawer }}>
        <Navbar />
      </DependenciesContext.Provider>
    );
    const about = screen.getByText("About");
    const skills = screen.getByText("Skills");
    const projects = screen.getByText("Projects");
    const contact = screen.getByText("Contact");
    expect(about).toBeTruthy();
    expect(skills).toBeTruthy();
    expect(projects).toBeTruthy();
    expect(contact).toBeTruthy();
  });

  it("after button click, it should scroll down", async () => {
    scrollFn = vi.fn();
    render(
      <DependenciesContext.Provider value={{ scrollFn, setToggleDrawer }}>
        <Navbar />
      </DependenciesContext.Provider>
    );
    const about = document.getElementById("AboutButton");
    about.click();
    expect(scrollFn).toBeCalledTimes(1);
    expect(scrollFn).toHaveBeenCalledWith("About");
  });

  it("toggle drawer button should be there", async () => {
    scrollFn = vi.fn();
    render(
      <DependenciesContext.Provider value={{ scrollFn, setToggleDrawer }}>
        <Navbar />
      </DependenciesContext.Provider>
    );
    const toggleButton = await screen.findByLabelText("toggle-drawer");
    expect(toggleButton).toBeTruthy();
  });

  it("setToggleDrawer should run when clicked", async () => {
    scrollFn = vi.fn();
    setToggleDrawer = vi.fn();
    render(
      <DependenciesContext.Provider value={{ scrollFn, setToggleDrawer }}>
        <Navbar />
      </DependenciesContext.Provider>
    );
    const toggleButton = screen.getByLabelText("toggle-drawer");
    toggleButton.click();
    expect(setToggleDrawer).toBeCalledTimes(1);
  });
});
