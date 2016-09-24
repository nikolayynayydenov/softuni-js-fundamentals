function print([n]) {
    for (let i = 1; i <= n; i += 1) {
        let line = '';
        for (let j = 1; j <= i; j += 1) {
            line += '$';
        }
        console.log(line);
    }
}

print([5]);