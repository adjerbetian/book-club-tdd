import { expect } from "chai";
import { sayCoucou } from "./ts-example";

describe("ts-example", () => {
    it("should say coucou", () => {
        expect(sayCoucou()).to.equal("coucou");
    });
});
