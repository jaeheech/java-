

let list = ''
list += '<ul>';
        // list += '<li>Hello 반갑다는 뜻이야!</li>';
        // list += '<li>Javascript 로 작성되었어.</li>';
        list += '</ul>';11
        // list += '<h2>&& and </h2>';
        // list += '<table class="a">';
        // list += '<tr><td>false</td><td>false</td><td>false</td></tr>';
        // list += '<tr><td>true</td><td>false</td><td>false</td></tr>';
        // list += '<tr><td>false</td><td>true</td><td>false</td></tr>';111
        // list += '<tr><td>true</td><td>true</td><td>true</td></tr>';
        // list += '</table>';11
        // list += '<h2>|| or </h2>';
        list += '<table class="a">';
        list += '<tr><th>증감연산자</th><th>설명</th><th>예)let nunber 12</th><th>순서</th></tr>';
        list += '<tr><td>변수++</td><td>기존의 변수 값에 1을 더합니다.(후위)</td><td>(number++)</td><td>1</td></tr>';
        list += '<tr><td>++변수</td><td>기존의 변수 값에 1을 더합니다.(전위)</td><td>(++number)</td><td>2</td></tr>';
        list += '<tr><td>변수--/td><td>기존의 변수 값에 1을 뺍니다.(후위)</td><td>(number--)</td><td>3</td></tr>';
        list += '<tr><td>--변수</td><td>기존의 변수 값에 1을 뻅니다.(전위)</td><td>(--number)</td><td>4</td></tr>';
        list += '</table>';

document.write(list)