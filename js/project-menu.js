$(document).ready(function(){

    gsap.to("#transition-open-left", {duration: 1, width: "0", ease: "power2"});
    gsap.to("#transition-open-right", {duration: 1, width: "0", ease: "power2"});

    $(".menu-button").click(function(){
        $(".dropdown-menu").slideToggle("fast", function() {
            if ($(".dropdown-menu").is(":visible")) {
                $(".menu-button").text("Close");
           } else {
            $(".menu-button").text("Menu");              
           }    
        });
    });

    $("#paws-button").hover(function(){
        $("#block-5").css("background-image", "url(/css/paws.png)");
    });

    $("#lingo-button").hover(function(){
        $("#block-5").css("background-image", "url(/css/lingo.png)");
    });

    $("#iv-button").hover(function(){
        $("#block-5").css("background-image", "url(/css/iv.png)");
    });
  
    $("#sgm-button").hover(function(){
        $("#block-5").css("background-image", "url(/css/sgm.png)");
    });

    $("#elliot-button").hover(function(){
        $("#block-5").css("background-image", "url(/css/elliot.jpg)");
    });

    $("#lighthouse-button").hover(function(){
        $("#block-5").css("background-image", "url(/css/lighthouse.png)");
    });

    $("#ball-button").hover(function(){
        $("#block-5").css("background-image", "url(/css/cyber.png)");
    });

    $("#mind-button").hover(function(){
        $("#block-5").css("background-image", "url(/css/mind.png)");
    });

    $("#cabaret-button").hover(function(){
        $("#block-5").css("background-image", "url(/css/cabaret.PNG)");
    });
  
    $("#pumpkin-button").hover(function(){
        $("#block-5").css("background-image", "url(/css/pumpkin.png)");
    });

    $("#oasis-button").hover(function(){
        $("#block-5").css("background-image", "url(/css/oasis.jpg)");
    });

    $("#cave-button").hover(function(){
        $("#block-5").css("background-image", "url(/css/cave.png)");
    });

    $("#neon-button").hover(function(){
        $("#block-5").css("background-image", "url(/css/neon.JPG)");
    });

    $("#misty-button").hover(function(){
        $("#block-5").css("background-image", "url(/css/island.jpeg)");
    });

});

let block5 = document.querySelector(".block-5");

block5.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursor-grow");
    window.addEventListener("click", cursorClick);
})

block5.addEventListener("mouseover", () => {
    mouseCursor.classList.add("cursor-grow");
    window.removeEventListener("click", cursorClick);
})