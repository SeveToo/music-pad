window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#5860d3",
    "#60c2d3",
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    });
  });

  // Create a function that makes bubbles
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.background = colors[index];
    bubble.style.position = "absolute";
    bubble.style.left = ` calc( 8.33vw + ${index * 16.66}vw)`;
    bubble.style.transform = ` translateX(-50%)`;
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  setTimeout(() => {
    let radomTaps = setInterval(function () {
      let nr = rand(0, 5);
      createBubbles(nr);
      sounds[nr].play();
    }, rand(1, 9) * 60);
  }, 2000);
});
