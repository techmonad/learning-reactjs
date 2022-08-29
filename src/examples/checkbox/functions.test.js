import {multiply, sum} from "./functions";

describe("arithmetic ", () => {
   it("sum", () => {
      expect( sum(1,2)).toBe(3);
   })


   it("multiple", () => {
      expect( multiply(1,2)).toBe(2);
   })

})