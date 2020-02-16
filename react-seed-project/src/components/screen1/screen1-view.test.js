import React from 'react';
import { StaticRouter } from 'react-router'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Screen1 from './screen1-view'

let container;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('has a "Screen #1" text', () => {
    act(() => {
        render(
            <StaticRouter>
                <Screen1 />
            </StaticRouter>
            ,container
        );
    });

    const paragraph = container.getElementsByTagName("p")[0];    
    expect(paragraph.textContent).toBe("Screen #1");   
});