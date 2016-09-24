function pointInRect([x, y, xMin, xMax, yMin, yMax]) {
    [x, y, xMin, xMax, yMin, yMax] = [x, y, xMin, xMax, yMin, yMax].map(Number);
    console.log(x >= xMin && x <= xMax && y >= yMin && y <= yMax ? 'inside' : 'outside');
}

pointInRectEvenFaster(['8', '-1', '2', '12', '-3', '3']);