import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import Card from "./card";

let container = null

beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
    jest.useFakeTimers()
})

afterEach(function () {
    unmountComponentAtNode(container)
    container.remove()
    container = null
    jest.useRealTimers()
})

it('should select null after timing out', () => {
    const onSelect = jest.fn()
    act(() => {
        render(<Card onSelect={onSelect}/>, container)
    })
    act(() => {
        // move ahead in time by 100ms
        jest.advanceTimersByTime(100)
    })
    expect(onSelect).not.toHaveBeenCalled()

    act(() => {
        // and then move ahead by 5 seconds
        jest.advanceTimersByTime(5000)
    })
    expect(onSelect).toHaveBeenCalledWith(null)
})

it("should cleanup on being removed", () => {
    const onSelect = jest.fn();
    act(() => {
        render(<Card onSelect={onSelect}/>, container);
    });
    act(() => {
        jest.advanceTimersByTime(100);
    });
    expect(onSelect).not.toHaveBeenCalled();

    // unmount the app
    act(() => {
        render(null, container);
    });
    act(() => {
        jest.advanceTimersByTime(5000);
    });
    expect(onSelect).not.toHaveBeenCalled();
});

it("should accept selections", () => {
    const onSelect = jest.fn();
    act(() => {
        render(<Card onSelect={onSelect}/>, container);
    });
    const button = container.querySelector("[data-testid='2']")
    act(() => {
        button.dispatchEvent(new MouseEvent("click", {bubbles: true}))
    })
    expect(onSelect).toHaveBeenCalledWith(2)
});