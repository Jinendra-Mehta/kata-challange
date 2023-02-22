"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walkTest = void 0;
function walkTest(direction, time) {
    if (direction.length != time) {
        return false;
    }
    let sum = 0;
    const plusDir = ["N", "E", "n", "e"];
    const minusDir = ["S", "W", "s", "w"];
    for (let dir of direction) {
        if (plusDir.includes(dir)) {
            sum += 1;
        }
        else if (minusDir.includes(dir)) {
            sum -= 1;
        }
        else {
            return false;
        }
    }
    return sum === 0;
}
exports.walkTest = walkTest;
