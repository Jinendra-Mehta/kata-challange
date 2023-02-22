"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
describe("test cases", () => {
    it("array length equals to minutes of time. happy case", () => {
        expect((0, main_1.walkTest)(["N", "E", "N", "W", "W", "S", "W", "S", "E", "E"], 10)).toBe(true);
    });
    it("array length equals to minutes of time. but path is wrong", () => {
        expect((0, main_1.walkTest)(["N", "E", "N", "W", "W", "S", "W", "S", "W", "E"], 10)).toBe(false);
    });
    it("array length not equals to minutes of time. ", () => {
        expect((0, main_1.walkTest)(["N", "W"], 10)).toBe(false);
    });
    it("array length not equals to minutes of time. ", () => {
        expect((0, main_1.walkTest)(["N", "E", "N", "W", "W", "S", "W", "S", "W", "E", "N"], 10)).toBe(false);
    });
    it("array length not equals to minutes of time. ", () => {
        expect((0, main_1.walkTest)(["N", "E", "N", "W", "W", "S", "W", "S", "E", "Q"], 10)).toBe(false);
    });
});
