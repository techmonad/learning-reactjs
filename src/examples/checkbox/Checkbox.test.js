import {render,screen} from "@testing-library/react";
import Checkbox from "./Checkbox";

test("Checkbox validation", () =>{
    render(<Checkbox/>)
    const text = screen.getByText(/This is first checkbox/i)
   expect(text).toHaveTextContent("This is first checkbox")
})