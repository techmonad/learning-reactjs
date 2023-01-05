import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import Toggle from "./toggle";


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

it('should toggle the button', () => {
    const onChange = jest.fn()
    act(() => {
        render(<Toggle onChange={onChange}/>, container)
    })
    const button = document.querySelector("[data-testid='toggle']")
    expect(button.textContent).toEqual("Turn on")
    act(() => {
        button.dispatchEvent(new MouseEvent("click", {bubbles: true}))
    })
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(button.textContent).toEqual("Turn off")

    Array(5).fill(1).forEach(() => {
        button.dispatchEvent(new MouseEvent("click", {bubbles: true}))
    })

    expect(onChange).toHaveBeenCalledTimes(6)
    expect(button.textContent).toEqual("Turn on")
})