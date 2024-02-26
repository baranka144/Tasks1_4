"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cercleCheck = void 0;
function cercleCheck(x, y) {
    let singleCell = 0.25;
    let nearEdge = singleCell * 3;
    let farEdge = singleCell * 2.5 * 4;
    let centerY = (2.5 + nearEdge) / 2;
    let centerX = (2.5 + nearEdge) / 2;
    let diameter = (farEdge) - nearEdge;
    let radius = diameter / 2;
    if (Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2) < Math.pow(radius, 2)) {
        return true;
    }
    else {
        return false;
    }
}
exports.cercleCheck = cercleCheck;
//# sourceMappingURL=task1.js.map