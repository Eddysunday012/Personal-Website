import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DependenciesContext } from "dependenciescontext";
import { ProjectPage } from "./ProjectPage";

describe('Tests for Project Page', () => {
    it('should render properly', async () => {
        render(
            <ProjectPage />
        )
    })
})