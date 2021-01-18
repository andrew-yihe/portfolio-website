let projectTitle = document.querySelector(".projectTitle");
let mouseCursor = document.querySelector(".cursor");
let projectBlock = document.querySelectorAll(".block-1");

function cursorMove(e) {
      mouseCursor.style.top = e.clientY + 'px';
      mouseCursor.style.left = e.clientX + 'px';
}

function cursorClick () {
      mouseCursor.classList.add("expand");
      console.log("click");
      setTimeout(() => {
            mouseCursor.classList.remove("expand");
      }, 500)
}


var blocks = document.getElementsByClassName("block");
var container = document.getElementsByClassName("container");


var hs = new HorizontalScroll.default({
      blocks: blocks,
      container: container,
      isAnimated: true,
      springEffect: 0.8,
});



window.addEventListener("mousemove", cursorMove);
window.addEventListener("click", cursorClick);

window.addEventListener('DOMContentLoaded', (event) => {
      console.log('DOM fully loaded and parsed');
      projectTitle.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("cursor-grow");
            projectTitle.classList.remove("text-hover");
            window.addEventListener("click", cursorClick);
      })

      projectTitle.addEventListener("mouseover", () => {
            mouseCursor.classList.add("cursor-grow");
            projectTitle.classList.add("text-hover");
            window.removeEventListener("click", cursorClick);
      })

});

AOS.init();

