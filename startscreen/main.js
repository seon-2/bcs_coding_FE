const time = document.querySelector(".time");
// html의 time이라는 class와 연결. document라는 object의 querySelector 함수
// . 붙이면 class 접근, #은 id로 접근, 안 붙이면 태그명으로 접근
// console.log(time); // 확인

const newDate = new Date();
// 현재 시간 정보 가져와서 newDate 변수에 저장

// 시, 분, 초 정보만 따로 저장
const hours = newDate.getHours();
const minutes = newDate.getMinutes();
const seconds = newDate.getSeconds();

time.innerText = hours + ":" + minutes + ":" + seconds;
// innerText : text를 변경하는 함수
// 시간이 흐르지 않음. 새로고침 했을 때만 변경됨, 필요없는 정보들도 있음
