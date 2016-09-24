function print([n]) {
    n = Number(n);
    let end;
    if(n % 2 == 0) {
        end = n - 1
    }
    else {
        end = n;
    }

    for (let i = 1; i <= end; i += 1) {
        let isInMiddle = i === Math.ceil(end / 2);
        let isInBeg = i === 1;
        let isInEnd = i === end;
        let isCharsSep = isInMiddle || isInBeg || isInEnd;

        let sepChar = isCharsSep ? '+' : '|';
        let fillChar = isCharsSep ? '-' : ' ';

        let line = sepChar;
        line += fillChar.repeat(n - 2);
        line += sepChar;
        line += fillChar.repeat(n - 2);
        line += sepChar;

        console.log(line);
    }
}

print([7]);
print([11]);
print([15]);
print([44]);