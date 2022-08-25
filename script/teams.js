let topImage = [
  "https://tpc.googlesyndication.com/simgad/931568015193886157",
  "https://tpc.googlesyndication.com/simgad/10994949654465411539",
  "https://tpc.googlesyndication.com/simgad/10926761020657163993",
];

let TopImg = () => {
  let rand = Math.floor(Math.random() * 3);
  document.getElementById("abtopimage").src = topImage[rand];
};

window.onload = TopImg();
