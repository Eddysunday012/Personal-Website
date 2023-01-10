import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { NavbarModal } from "./MenuModal";
import { DependenciesContext } from "dependenciescontext";

describe("Test Suite for Menu Modal", () => {
  it("should render properly", async () => {
    render(
      <DependenciesContext.Provider>
        <NavbarModal />
      </DependenciesContext.Provider>
    );
  });
});
