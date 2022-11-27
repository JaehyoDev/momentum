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

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
