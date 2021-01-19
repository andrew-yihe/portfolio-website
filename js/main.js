let mouseCursor = document.querySelector(".cursor");
let text = document.querySelector(".aboutText");
let name = document.querySelector("#name");
let homeLink = document.querySelector("#back");
let aboutLink = document.querySelector("#about");
let projectLink = document.querySelector("#project");
let contactLink = document.querySelector("#contact");
let ball = document.querySelector("#ball");
let social = document.querySelectorAll(".contactLinks a");
let socialBox = document.querySelector("#contactText");
let projectMenu = document.querySelector("#projectMenuContainer");
let projectItem1 = document.querySelector("#projectmenu1");
let projectItem2 = document.querySelector("#projectmenu2");
let projectItem3 = document.querySelector("#projectmenu3");

let $loader = $( '.loading' );

let ProjectBallBtm = document.querySelector("#ProjectBallBtm");

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

function showAbout () {
      
      socialBox.style.opacity = "0";
      gsap.to(socialBox, {display:"none", delay: 0.3});
      name.style.opacity = "0";
      gsap.to(name, {display:"none", delay: 0.5});
      text.style.display = "block";
      gsap.to(projectMenu, {duration: 0.5, opacity:0});
      gsap.to(projectMenu, {display:"none", delay: 0.5});
      gsap.to("#projectLineLeft", {width: "0vw"});
      gsap.to("#projectLineRight", {width: "0vw"});
      
      gsap.to(text, {duration: 1, opacity: 1, delay: 0.3, ease: "power1"});
      gsap.to(ball, {duration: 1.5, height: "150vmin", width: "150vmin", x: "-50vw",y: "0vw", ease: "power4"});
      name.style.pointerEvents = "none";
      gsap.to(socialBox, {x: "0"});

      gsap.to("#ProjectBallBtm", {bottom: "-100vmin", opacity: 0});
}

function showHome () {
      
      name.style.pointerEvents = "initial";
      socialBox.style.opacity = "0";
      gsap.to(socialBox, {display:"none", delay: 0.3});
      gsap.to(text, {duration: 0.5, opacity:0});
      gsap.to(text, {display:"none", delay: 0.3});
      gsap.to(projectMenu, {duration: 0.5, opacity:0});
      gsap.to(projectMenu, {display:"none", delay: 0.5});
      gsap.to("#projectLineLeft", {width: "0vw"});
      gsap.to("#projectLineRight", {width: "0vw"});
      
      name.style.display = "block";
      gsap.to(name, {duration: 0.5, opacity: 1, delay: 0.3, ease: "power1"});
      gsap.to(ball, {duration: 1.5, height: "75vmin", width: "75vmin", x: "0", y: "0vw", ease: "expo"});
      gsap.to(socialBox, {x: "0"});

      gsap.to("#ProjectBallBtm", {bottom: "-100vmin", opacity: 0});
}

function showContact () {
      
      name.style.opacity = "0";
      gsap.to(name, {display:"none", delay: 0.5});
      socialBox.style.display = "block";
      gsap.to(text, {duration: 0.5, opacity:0});
      gsap.to(text, {display:"none", delay: 0.3});
      
      gsap.to(projectMenu, {duration: 0.5, opacity:0});
      gsap.to(projectMenu, {display:"none", delay: 0.5});
      gsap.to("#projectLineLeft", {width: "0vw"});
      gsap.to("#projectLineRight", {width: "0vw"});
      
      gsap.to(socialBox, {duration: 1, opacity: 1, delay: 0.3, x: "0", ease: "power1"});
      gsap.to(ball, {duration: 1.5, height: "225vmin", width: "225vmin", x: "30vw", y: "60vw", ease: "power4"});
      name.style.pointerEvents = "none";
      
      gsap.to("#ProjectBallBtm", {bottom: "-100vmin", opacity: 0});
}

function showProjectMenu () {
      
      name.style.opacity = "0";
      gsap.to(name, {display:"none", delay: 0.5});
      name.style.pointerEvents = "none";
      gsap.to(text, {duration: 0.5, opacity:0});
      gsap.to(text, {display:"none", delay: 0.3});
      socialBox.style.opacity = "0";
      gsap.to(socialBox, {display:"none", delay: 0.3});
      
      projectMenu.style.display = "block";
      gsap.to(projectMenu, {duration: 1, opacity: 1, delay: 0.3, ease: "power1"});
      gsap.to(ball, {duration: 2, height: "150vmin", width: "150vmin", x: "0", y: "-50vw", ease: "power4"});

      gsap.to("#ProjectBallBtm", {bottom: "-70vmin", opacity: 1});
      
      gsap.to("#projectLineLeft", {width: "35vw"});
      gsap.to("#projectLineRight", {width: "35vw"});
      
      gsap.to(socialBox, {x: "0"});
}

function Project1Clicked () {
      gsap.to("#transition-close-left", {width: "50%"});
      gsap.to("#transition-close-right", {width: "50%"});
      console.log("clicked");
      setTimeout(() => {
            window.location.href="vr.html";
      }, 500);
}

function Project2Clicked () {
      gsap.to("#transition-close-left", {width: "50%"});
      gsap.to("#transition-close-right", {width: "50%"});
      console.log("clicked");
      setTimeout(() => {
            window.location.href="visual.html";
      }, 500);
}

function Project3Clicked () {
      gsap.to("#transition-close-left", {width: "50%"});
      gsap.to("#transition-close-right", {width: "50%"});
      console.log("clicked");
      setTimeout(() => {
            window.location.href="game.html";
      }, 500);
}

const StartLoading = function () {

      var counter = 0;
      var c = 0;
      var i = setInterval(function () {

            $(".loading .counter h1").html(c);

            counter++;
            c += 2;
            if (counter == 51) {
                  clearInterval(i);
            }

      }, 30);

};

const Loaded = function () {
      setTimeout(() => {
            $loader.fadeOut('slow');
      }, 1600);
      
      setTimeout(() => {
            gsap.to("#loading-shade", {width:"0vw"});
      }, 1000);
      
      setTimeout(() => {
            gsap.to(ball, {opacity:1});
      }, 2200);

}

window.addEventListener("mousemove", cursorMove);
window.addEventListener("click", cursorClick);
homeLink.addEventListener("click", showHome);
contactLink.addEventListener("click", showContact);
projectLink.addEventListener("click", showProjectMenu);
aboutLink.addEventListener("click", showAbout);

projectItem1.addEventListener("click", Project1Clicked);
projectItem2.addEventListener("click", Project2Clicked);
projectItem3.addEventListener("click", Project3Clicked);


text.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("cursor-grow");
      text.classList.remove("text-hover");
      window.addEventListener("click", cursorClick);
})

text.addEventListener("mouseover", () => {
      mouseCursor.classList.add("cursor-grow");
      text.classList.add("text-hover");
      window.removeEventListener("click", cursorClick);
})

name.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("cursor-grow");
      text.classList.remove("text-hover");
      window.addEventListener("click", cursorClick);
      gsap.to(ball, {duration: 2, delay: 0.1, scale: 1, ease: "power4"});
})

name.addEventListener("mouseover", () => {
      mouseCursor.classList.add("cursor-grow");
      text.classList.add("text-hover");
      window.removeEventListener("click", cursorClick);
      gsap.to(ball, {duration: 2, delay: 0.1, scale: 1.2, ease: "power4"});
})

projectMenu.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("cursor-grow");
      window.addEventListener("click", cursorClick);
})

projectMenu.addEventListener("mouseover", () => {
      mouseCursor.classList.add("cursor-grow");
      window.removeEventListener("click", cursorClick);
})

socialBox.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("cursor-grow");
      window.addEventListener("click", cursorClick);
})

socialBox.addEventListener("mouseover", () => {
      mouseCursor.classList.add("cursor-grow");
      window.removeEventListener("click", cursorClick);
})

StartLoading();            
Loaded();

