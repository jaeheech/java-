document.addEventListener("DOMContentLoaded", () => {
    let arr = JSON.parse(localStorage.getItem("key")) ?? [];
    const title = document.getElementById("title");
    const deteil = document.getElementById("deteil");
    const writer = document.getElementById("writer");
    const btn = document.getElementById("btn");
   
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜

    let number=0
    btn.addEventListener("click", () => {

      if (title.value == "") {
        alert("입력하세요");
      } else if (deteil.value == "") {
        alert("입력하세요");
      } else if (writer.value == "") {
        alert("입력하세요");
      } else {
        arr.push({
          제목: title.value,
          내용: deteil.value,
          작성자: writer.value,
          작성일자: year + '/' + month + '/' + date,
        조회수:number++
        });
        localStorage.setItem("key", JSON.stringify(arr));
        boardpage()
        alert("등록이 완료 되었습니다.")
      }
      title.value = "";
      deteil.value = "";
      writer.value = "";
   
    });

  });


  // 작성버튼 게시판 으로 이동
  function boardpage(){
    location.href="./board.html"
  }
  // 목록버튼 게시판으로 이동
  btn2.addEventListener("click",()=>{
    boardpage()
  })

