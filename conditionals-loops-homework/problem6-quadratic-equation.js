function solve([a, b, c]) {
    [a, b, c] = [a, b, c].map(Number);
    let D = b * b - 4 * a * c;
    if(D < 0) {
        console.log('No');
    }
    else if(D == 0) {
        console.log(-0.5 * b / a);
    }
    else {
        let roots = [0.5 * (-b + Math.sqrt(D)) / a,
            0.5 * (-b - Math.sqrt(D)) / a];

        roots.sort((a, b) => a - b);
        console.log(roots[0]);
        console.log(roots[1]);
    }
}

solve([1, 111, 31]);