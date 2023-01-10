import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Navbar } from "./Menu";
import { DependenciesContext } from "dependenciescontext";
import React from "react";

describe("Tests for menu", () => {
  it("should render without errors", async () => {
    render(<Navbar />);
  });

  it("should have navbar label", async () => {
    render(<Navbar />);
    const navbar = screen.getByLabelText("Navbar");
    expect(navbar).toBeTruthy();
  });

  it("should have labels for all 4 sections", async () => {
    render(<Navbar />);
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
    const scrollFn = vi.fn();
    render(
      <DependenciesContext.Provider value={{ scrollFn }}>
        <Navbar />
      </DependenciesContext.Provider>
    );
    const about = document.getElementById("AboutButton");
    about.click();
    expect(scrollFn).toBeCalledTimes(1);
    expect(scrollFn).toHaveBeenCalledWith("About");
  });
});
