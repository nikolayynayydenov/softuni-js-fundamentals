function multiplicationTable([n]) {
    n = Number(n);
    let html = '<table border="1"><tr><th>x</th>';
    for (let i = 1; i <= n; i += 1) {
        html += `<th>${i}</th>`;
    }
    html += '</tr>';

    for (let i = 1; i <= n; i += 1) {
        html += `<tr>`;
        html += `<th>${i}</th>`;
        for (let j = 1; j <= n; j += 1) {
            html += `<td>${i * j}</td>`;
        }
        html += `</tr>`;
    }
    html += '</table>';
    
    console.log(html);
}

document.body.innerHTML = multiplicationTable([5]);