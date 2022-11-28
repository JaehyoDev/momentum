const images = [
  "australia.jpg",
  "france.jpg",
  "greece.jpg",
  "india.jpg",
  "seoul.jpg",
  "theuk1.jpg",
  "theuk2.jpg",
  "theuk3.jpg",
  "usa1.jpg",
  "usa2.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 바디에 배경이미지 바로 추가
document.body.style.backgroundImage = `url(img/${chosenImage})`;

// 이미지 태그 만들어서 배경이미지 추가
//const bgImage = document.createElement("img");
//bgImage.src = `img/${chosenImage}`;
//document.body.appendChild(bgImage);
