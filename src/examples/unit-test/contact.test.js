import React from "react";

import {render, unmountComponentAtNode} from "react-dom";
import DummyMap from "./map";
import {act} from "react-dom/test-utils";
import Contact from "./contact";

let container = null
beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container = null
})

jest.mock("./map", () => {
    return function DummyMap(props) {
        return (<div data-testid="map">
            {props.center.lat}:{props.center.long}
        </div>)
    }
})


it('should render the contact info', () => {
    const center = { lat: 0, long: 0 };
    act(() =>{
        render(
            <Contact name="bob" email={"bob@gmail.com"} site={"http://bob.com"} center={center}/>,
            container
        )
    })

    expect(container.querySelector("[data-testid='email']").getAttribute("href")).toEqual("mailto:bob@gmail.com")
    expect(container.querySelector("[data-testid='site']").getAttribute("href")).toEqual("http://bob.com")
    expect(container.querySelector("[data-testid='map']").textContent).toEqual("0:0")
    
})