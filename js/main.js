$(function () {
  // const locoScroll = new LocomotiveScroll({
  //   el: document.querySelector("[data-scroll-container]"),
  //   smooth: true,
  //   smartphone: {
  //     smooth: true,
  //   },
  // });

  // mouse effect
  $("body").mousemove(function (e) {
    gsap.to("#cursor", {
      duration: 0.4,
      x: e.clientX,
      y: e.clientY,
      ease: Power3.easeOut,
    });
  });
  $(".sc_product .content").mousemove(function () {
    gsap.to("#cursor", 0.4, { width: 100, height: 100 });
    gsap.to("#cursor svg", { visibility: "visible", opacity: 1 });
  });
  $(".sc_product .content").mouseleave(function () {
    gsap.to("#cursor svg", { visibility: "hidden", opacity: 0 });
    gsap.to("#cursor", 0.4, { width: 60, height: 60 });
  });

  // intro

  const headTxt = new SplitType(".spliteTitle", { types: "words, chars" });

  motion = gsap.from(headTxt.words, {
    opacity: 0,
    yPercent: 10,
    stagger: 0.05,
    delay: 1.1,
    duration: 1,
  });

  motion.play();

  setTimeout(function () {
    $(".spliteTitle").addClass("none");
    $(".spliteTitle2").removeClass("none");
  }, 3000);

  gsap.fromTo(
    ".sc_visual .line_wrap",
    {
      width: 0,
    },
    {
      width: "100%",
      duration: 1,
      stagger: 0.05,
      stagger: { amount: 1 },
      ease: "back",
    }
  );
  gsap.fromTo(
    ".sc_visual .sub_text_wrap span",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      stagger: 0.05,
      stagger: { amount: 1 },
      ease: "none",
    }
  );
});
