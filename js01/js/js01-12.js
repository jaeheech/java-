

let tof = prompt('true 또는 false를 입력하세요.')

let list =''
    list += `<table class="a" >`
    list += `<tr><th>&&연산</th><th>연산</th><th>값</th><th>결과</th></tr>`;
    list += `<tr><td>${tof}</td><td>&&</td><td> false </td><td>false</td></tr>`;
    list += `<tr><td>${tof}</td><td>&&</td><td>true</td><td>false</td></tr>`;
    list += `<tr><th>||연산</th><th>연산</th><th>값</th><th>결과</th></tr>`;
    list += `<tr><td>${tof}</td><td>||</td><td>false</td><td>false</td></tr>`
    list += `<tr><td>${tof}</td><td>||</td><td>true</td><td>true</td></tr>`     
    list += 
    `</table>`


document.write(list)

