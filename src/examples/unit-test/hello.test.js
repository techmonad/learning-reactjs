import React from "react";

import {render, unmountComponentAtNode} from "react-dom";

import {act} from "react-dom/test-utils";
import Hello from "./hello";
import pretty from "pretty";

let container = null;
beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
})


afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})


it('render with or without name', () => {
        act(() => {
            render(<Hello/>, container)
        })
        expect(container.textContent).toBe("Hey, stranger")

        act(() => {
            render(<Hello name="BOB"/>, container)
        })
        expect(container.textContent).toBe("Hello, BOB!")
    }
);

it("should render a greeting", () => {
    act(() => {
        render(<Hello />, container);
    });

    expect(
        pretty(container.innerHTML)
    ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */

    act(() => {
        render(<Hello name="Jenny" />, container);
    });

    expect(
        pretty(container.innerHTML)
    ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */

    act(() => {
        render(<Hello name="Margaret" />, container);
    });

    expect(
        pretty(container.innerHTML)
    ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */
});