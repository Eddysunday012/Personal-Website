import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Navbar } from "./Menu";
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
});
