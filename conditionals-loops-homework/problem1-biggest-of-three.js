function biggest([n1, n2, n3]) {
    let arr = [n1, n2, n3].map(Number);
    arr.sort((a, b) => b - a);
    console.log(arr[0]);
}

biggest(['1', '3', '2']);