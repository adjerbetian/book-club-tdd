const { expect } = require("chai");
const { sayCoucou } = require("./js-example");

describe("js-example", () => {
    it("should say coucou", () => {
        expect(sayCoucou()).to.equal("coucou");
    });
});
