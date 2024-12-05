
$(document).ready(function(){
    //헤더 푸터 컴포넌트
    $('#header').load('../components/header.html');
    $('#footer').load('../components/footer.html');

    $('#pagination').load('../components/pagination.html');
    $('#top_menu').load('../components/top_menu.html');
    $('#repeat').load('../components/repeat.html');
})

document.addEventListener("DOMContentLoaded", () => {
    const weChatBtn = document.querySelector(".contact-btn.wechat");
    const weChatPop = document.querySelector(".wechat-qr-img");
    const weChatCloseBtn = document.querySelector(".wechat-close");
    const bg = document.querySelector(".qr-background");


    weChatBtn.addEventListener("click", () => {
      weChatPop.style.display = "block";
      bg.style.display = "block";
    });

    weChatCloseBtn.addEventListener("click", () => {
      weChatPop.style.display = "none";
      bg.style.display = "none";
    });
  });














// /*smooth-scroll*/
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// ScrollTrigger.normalizeScroll(true)

// // create the smooth scroller FIRST!
// let smoother = ScrollSmoother.create({
//   smooth: 2,
//   effects: true,
//   normalizeScroll: true
// });

// // pin box-c when it reaches the center of the viewport, for 300px
// ScrollTrigger.create({
//   trigger: ".box-c",
//   pin: true,
//   start: "center center",
//   end: "+=300",
//   markers: true
// });

// document.querySelector("button").addEventListener("click", e => {
//   // scroll to the spot where .box-c is in the center.
//   // parameters: element, smooth, position
//   smoother.scrollTo(".box-c", true, "center center");
  
//   // or you could animate the scrollTop:
//   // gsap.to(smoother, {
//   //  scrollTop: smoother.offset(".box-c", "center center"),
//   //  duration: 1
//   // });
// });
// import { GSAPInfoBar } from "https://codepen.io/GreenSock/pen/vYqpyLg.js"
// new GSAPInfoBar({ link: "https://gsap.com/docs/v3/Plugins/ScrollSmoother/"});
