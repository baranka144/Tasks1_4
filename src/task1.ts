export function cercleCheck(x: number, y: number): boolean {
    let singleCell = 0.25;
    let nearEdge = singleCell * 3;
    let farEdge = singleCell * 2.5 * 4;
    
    let centerY = (2.5 + nearEdge) / 2;
    let centerX = (2.5 + nearEdge) / 2;
    let diameter = (farEdge) - nearEdge;
    let radius = diameter / 2
    
    if (Math.pow(x - centerX,2) + Math.pow(y - centerY,2) < Math.pow(radius,2)) {
        return true;
    }
    else {
        return false;
    } 
}