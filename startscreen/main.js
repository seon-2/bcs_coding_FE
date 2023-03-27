// 함수로 만들기
function getTime() {
  const time = document.querySelector(".time");
  // html의 time이라는 class와 연결. document라는 object의 querySelector 함수
  // . 붙이면 class 접근, #은 id로 접근, 안 붙이면 태그명으로 접근
  // console.log(time); // 확인

  const newDate = new Date();
  // 현재 시간 정보 가져와서 newDate 변수에 저장

  // 시, 분, 초 정보만 따로 저장
  //   1:1:1 -> 01:01:01 으로 화면에 출력
  const hours = String(newDate.getHours()).padStart(2, "0");
  const minutes = String(newDate.getMinutes()).padStart(2, "0");
  let seconds = String(newDate.getSeconds()).padStart(2, "0");

  // 1:1:1 -> 01:01:01 으로 화면에 출력하는 다른 방법
  //   if (seconds.toString().length === 1) {
  //     seconds = "0" + seconds;
  //   }

  // 변수와 문자열을 함께 출력
  //   time.innerText = hours + ":" + minutes + ":" + seconds;
  time.innerText = `${hours} : ${minutes} : ${seconds}`;
  // innerText : text를 변경하는 함수
}

// 함수 실행
// getTime();

// 1초 마다 실행할 수 있도록
// setInterval(실행할 함수, 얼만큼 반복) 1000 = 1초
setInterval(getTime, 1000);

function getQuotes() {
  const quotesMsg = document.querySelector(".quotesMsg");
  let savedQuotes = localStorage.getItem("quotes");

  if (!savedQuotes) {
    localStorage.setItem(
      "quotes",
      JSON.stringify(["스스로 돌아보자", "하다보면 된다", ";)", "성실"])
    );
    savedQuotes = localStorage.getItem("quotes");
  }
  let quotesArr = JSON.parse(savedQuotes);

  quotesMsg.innerText = quotesArr[Math.floor(Math.random() * quotesArr.length)];
}

setInterval(getQuotes, 10000);

function onClickAdd() {
  const newQuotes = document.querySelector(".newQuotes");
  newQuotes.style.display = "inline-block";
}

function onClickRegist() {
  const newQuotesInput = document.querySelector(".newQuotesInput");
  const newQuotes = document.querySelector(".newQuotes");
  const quotesMsg = document.querySelector(".quotesMsg");

  if (!newQuotesInput.value) {
    return;
  }

  let savedQuotes = localStorage.getItem("quotes");
  let quotesArr = JSON.parse(savedQuotes);
  quotesArr.push(newQuotesInput.value);
  // console.log(newQuotesInput.value);
  localStorage.setItem("quotes", JSON.stringify(quotesArr));

  quotesMsg.innerHTML = `<span style="color: red">${newQuotesInput.value}</span>`;
  newQuotes.style.display = "none";
  newQuotesInput.value = "";
}

let isLoading = false;

async function onClickSearch() {
  const searchInput = document.querySelector(".searchInput");
  const searchResult = document.querySelector(".searchResult");

  if (!searchInput.value) return; // 빈 칸 입력 예외 처리
  if (!isLoading) return; // chatGPT 연속 요청 방지

  // if 문을 통과했다면 isLoading === false

  isLoading = true;
  const question = searchInput.value;
  // 검색 중
  searchInput.value = "검색 중 입니다. 잠시만 기다려주세요 :)";

  // FE에서 BE로 보내는 코드. 요청 보내기까지 시간이 걸림. 기다리는 시간 필요 (async, await)
  const response = await axios.post(
    "https://holy-fire-2749.fly.dev/chat",
    {
      // body
      question,
    },
    {
      // header
      headers: {
        // 대소문자 맞아야 함
        "Content-type": "application/json",
        Authorization: "Bearer BLOCKCHAINSCHOOL3",
      },
    }
  );

  // 응답 정상
  if (response.status === 200) {
    searchResult.style.display = "inline";
    searchResult.innerText = response.data.choices[0].message.content;
  }

  // 검색창 비우기
  searchInput.value = "";
  isLoading = false;
}

function onClickToggle(value) {
  const nft = document.querySelector(".nft");
  const nftView = document.querySelector(".nftView");

  if (value) {
    nft.style.display = "inline-block";
    nftView.style.display = "none";
  } else {
    nft.style.display = "none";
    nftView.style.display = "inline-block";
  }
}
