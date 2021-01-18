AOS.init();

window.scrollTo(0, 0);

window.onload = function () {
      lax.init()
      lax.addDriver(
            "scrollY",
            function () {
                  return document.documentElement.scrollTop;
            }, {
                  frameStep: 1
            }
      );

      lax.addElements(".project-title", {
            scrollY: {
                  translateX: [["elInY", "elOutY"], [-400, "screenWidth+100"]],
            }
      });
}