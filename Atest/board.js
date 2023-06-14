  const write_btn =document.getElementById("write_btn")
    /*게시판 화면에 나타내기*/ 
  function render() {
    const boardTable = document.getElementById('board_table')
    let localDate = localStorage.getItem('key')
    let getDate = JSON.parse(localDate)
    // console.log(getDate)

    let innerHTMl = `  

    <tr>
        <th>글번호</th>
        <th>제목</th>
        <th>내용</th>
        <th>작성자</th>
        <th>조회수</th>
        <th>작성일자</th>
     
    </tr>`
    


    for (let i = 0; i < getDate.length; i++) {
        innerHTMl += `
   
        <tr>
            <td>${i + 1}</td>
            <td>${getDate[i].제목}</td>
            <td>${getDate[i].내용}</td>
            <td>${getDate[i].작성자}</td>
            <td>${getDate[i].조회수}</td>
            <td>${getDate[i].작성일자}</td>
         
            <td><button id="del" onclick="delBtn(${i})" >삭제</button> </td>
           
            
        </tr>
        `
    }
    boardTable.innerHTML = innerHTMl
    boardTable.style.border= '2px solid yellowgreen';
}

//게시판 삭제 기능
function delBtn(i) {
    console.log('게시판 번호:', i)
    const getDate = JSON.parse(localStorage.getItem('key'))

    const delDate = getDate.splice(i, 1)
    console.log(delDate)
    console.log('삭제가 반영된 배열:', getDate)

    localStorage.setItem('key', JSON.stringify(getDate))

    render()
}

render()

function wirtepage(){
    location.href="./write.html"
}
write_btn.addEventListener("click",()=>{wirtepage()})














