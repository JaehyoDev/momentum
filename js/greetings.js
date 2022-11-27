const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

// 일반적으로 string으로만 포함된 변수는 대문자로 표기
// 그리고 중요한 정보를 담은게 아니라서 대문자로 표기
const HIDDEN_CLASSNAME = "hidden";

// 문자가 반복되면 변수로 설정해서 실수하지 않도록 하자
// 변수로 설정하면 변수가 잘못 입력되면 에러로 알 수 있다.
// 문자는 에러로 안 뜨니 좋지 않다.
const USERNAME_KEY = "username";
const link = document.querySelector("a");

/* 이미 브라우저에서 제공하는 기능이라 HTML에서 가능하다.
function onLoginBtnClick() {
  const username = loginInput.value;
  console.log(username);
 
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  }
}
*/
//loginButton.addEventListener("click", onLoginBtnClick);

function onLoginSubmit(event) {
  event.preventDefault(); //submit의 기본기능인 엔터나 클릭시 리프레시를 막는다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  // 텍스트를 합치는 방법
  // 1번
  //greeting.innerText = "Hello " + username;
  // 2번 `은 백틱이라고 불림
  //greeting.innerText = `Hello ${username}`;
  paintGreetings(username);
}

/*
function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}
*/
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
//link.addEventListener("click", handleLinkClick);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}
