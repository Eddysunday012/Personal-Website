import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DependenciesContext } from "dependenciescontext";
import {act} from 'react-dom/test-utils';
import { ProjectPage } from "./ProjectPage";

const projects = [
    {
        Name: 'React Project',
        Decriptions: 'Something something something something something something',
        Link: 'link.to.somewhere.com',
        Icon: {
            Type: 'icon',
            Link: null
        }
    },
    {
        Name: 'Python Project',
        Decriptions: 'Something something something something something something',
        Link: 'link.to.somewhere.com',
        Icon: {
            Type: 'icon',
            Link: null
        }
    },
    {
        Name: 'One other project',
        Decriptions: 'Something something something something something something',
        Link: 'link.to.somewhere.com',
        Icon: {
            Type: 'icon',
            Link: null
        }
    }

]

function setWidth(width) {
    global.innerWidth = width;
    act(() => {
      global.dispatchEvent(new Event('resize'));
    });
}

export function setNarrow() {
    setWidth(550);
}

describe('Tests for Project Page', () => {
    it('should render properly', async () => {
        render(
            <DependenciesContext.Provider value={{projects}}>
                <ProjectPage />
            </DependenciesContext.Provider>
        )
    });

    it('shoud have proper labels', async () => {
        render(
            <DependenciesContext.Provider value={{projects}}>
                <ProjectPage />
            </DependenciesContext.Provider>
        )
        const mainProjectLabel = screen.getByLabelText('Projects');
        const projectLabel = screen.getByLabelText('project1');
        expect(mainProjectLabel).toBeTruthy();
        expect(projectLabel).toBeTruthy();

    });

    it('should retain sizing after screen resize (mobile)', async () => {
        render(
            <DependenciesContext.Provider value={{projects}}>
                <ProjectPage />
            </DependenciesContext.Provider>
        )
        setNarrow();
        
    });


})