
$(document).ready(function(){
    //헤더 푸터 컴포넌트
    $('#header').load('../components/header.html');
    $('#footer').load('../components/footer.html');

    $('#pagination').load('../components/pagination.html');
    $('#top_menu').load('../components/top_menu.html');
    $('#repeat').load('../components/repeat.html');
    $('#quick').load('../components/quick.html');
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


  function getCurrentLanguage() {
    const selectedLang = localStorage.getItem("selectedLang");
    return selectedLang || "ko"; // 기본값 "ko"
  }

  // 텍스트 복원 (한국어 선택 시 원래 상태로)
  function restoreOriginalText() {
    const elements = document.querySelectorAll("[data-original]");
    elements.forEach((el) => {
      el.textContent = el.getAttribute("data-original");
    });
  }

  function replaceTextInPage(searchWords, replacement) {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT, // 텍스트 노드만 탐색
      (node) => {
        // 텍스트 노드가 `translate="no"`를 가진 부모 요소 내에 있을 경우 제외
        if (node.parentNode && node.parentNode.hasAttribute("translate") && node.parentNode.getAttribute("translate") === "no") {
          return NodeFilter.FILTER_REJECT; // 번역하지 않음
        }
        return NodeFilter.FILTER_ACCEPT; // 번역 가능
      },
      false
    );

    let node;
    while ((node = walker.nextNode())) {
      const originalText = node.nodeValue;
      const updatedText = originalText.replace(
        new RegExp(searchWords.join("|"), "gi"),
        replacement
      );
      if (updatedText !== originalText) {
        node.nodeValue = updatedText;
      }
    }
  }

  // 언어에 따라 텍스트 교체 및 복원
  function correctWords() {
    const currentLang = getCurrentLanguage();
    if (currentLang === "en") {
      replaceTextInPage(
        ["The Three Principles of the Council of Ministers of Briere", "The Three Principles of the Council of Ministers of Brillerre", "Rep. Briller's Three Principles", "브리에의원의 3가지 원칙", "Briller의원의 3가지 원칙"],
        "Three Principles of the Briller"
      );
      replaceTextInPage(["브리에", "Brie"], "Briller");
      replaceTextInPage(["울쎄라", "cry", "well"], "Ulthera");
      replaceTextInPage(["차정윤", "Cha Jeong- yoon", "Cha Jeong-yoon"], "Cha Jungyoon");
    } else if (currentLang === "ko") {
      replaceTextInPage(["Briller"], "브리에");
      replaceTextInPage(["Ulthera"], "울쎄라");
      replaceTextInPage(["Cha Jungyoon"], "차정윤");
    }
  }

  // 언어 설정 및 즉시 적용
  function setLanguage(lang) {
    localStorage.setItem("selectedLang", lang);
    correctWords(); // 새로고침 없이 즉시 반영
  }

  // 페이지 로드 후 실행
  document.addEventListener("DOMContentLoaded", () => {
    correctWords();

    // 구글 번역 위젯 적용 후 DOM 변경 사항 추적
    const observer = new MutationObserver(() => {
      correctWords();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
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
