$(document).ready(function () {
  //헤더 푸터 컴포넌트
  $("#header").load("../components/header.html");
  $("#footer").load("../components/footer.html");

  $("#pagination").load("../components/pagination.html");
  $("#top_menu").load("../components/top_menu.html");
  $("#repeat").load("../components/repeat.html");
  $("#quick").load("../components/quick.html");
});




// Function to update visibility of .only-mobile elements based on selected language
function updateMobileVisibility() {
  const lang = localStorage.getItem("selectedLang");
  const mBr = document.querySelectorAll(".only-mobile");
  const sBr = document.querySelectorAll(
    ".about-briller-clinic .swiper .swiper-wrapper .swiper-slide .text-wrap .text br"
  );

  mBr.forEach((el) => {
    if (lang === "en" || window.innerWidth > 767) {
      el.style.display = "none";
    } else if (!(lang === "en") && window.innerWidth <= 767) {
      el.style.display = "";
    }
  });

  sBr.forEach((el) => {
    if (lang === "en") {
      el.style.display = "none";
    } else {
      el.style.display = "";
    }
  });
}

// Event listener for language change
window.addEventListener("storage", (event) => {
  if (event.key === "selectedLang") {
    updateMobileVisibility();
  }
});

// Event listener for window resize
window.addEventListener("resize", updateMobileVisibility);

// Initial call on page load
document.addEventListener("DOMContentLoaded", updateMobileVisibility);

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


function replaceTextInPage(searchWords, replacement) {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    (node) => {
      if (
        node.parentNode &&
        node.parentNode.hasAttribute("translate") &&
        node.parentNode.getAttribute("translate") === "no"
      ) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
    false
  );

  const boundaryRegex = new RegExp(
    `(${searchWords
      .map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")})`,
    "gi"
  );

  let node;
  while ((node = walker.nextNode())) {
    const originalText = node.nodeValue;

    // 이미 중복된 텍스트가 있는지 확인
    if (originalText.includes(replacement)) {
      continue; // 중복된 경우 변경하지 않음
    }

    const updatedText = originalText.replace(boundaryRegex, replacement);
    if (updatedText !== originalText) {
      node.nodeValue = updatedText;
    }
  }
}


// 언어 변경에 따라 동작하도록 연결
function handleLanguageChange() {
  const currentLang = getCurrentLanguage();

  if (currentLang === "en") {
    replaceTextInPage(["Ulthera, Ulthera"], "Ulthera");
  } else {
    restoreOriginalText();
  }
}

// 초기화 및 이벤트 연결
document.addEventListener("DOMContentLoaded", () => {
  handleLanguageChange();

  window.addEventListener("storage", (event) => {
    if (event.key === "selectedLang") {
      handleLanguageChange();
    }
  });
});

// 언어에 따라 텍스트 교체 및 복원
function correctWords() {
  // const docName = document.querySelector(".doctor-info-wrap .doctor-info-text-wrap .doctor-name");
  const currentLang = getCurrentLanguage();
  if (currentLang === "en") {
    const flex = document.querySelectorAll(
      ".tentherma-wrap .tentherma-detail-process .tentherma-detail-process-flex-wrap .process-flex"
    );

    flex.forEach((el) => {
      el.style.maxWidth = "405px";
    });

    replaceTextInPage(["the Council of Ministers of Briere"], "the Briller");
    replaceTextInPage(
      ["The Three Principles of the Council of Ministers of Brillerre"],
      "Three Principles of the Briller"
    );
    replaceTextInPage(
      ["Rep. Briller's Three Principles"],
      "Three Principles of the Briller"
    );
    replaceTextInPage(
      ["브리에의원의 3가지 원칙"],
      "Three Principles of the Briller"
    );
    replaceTextInPage(
      ["Briller의원의 3가지 원칙"],
      "Three Principles of the Briller"
    );
    replaceTextInPage(["브리에", "Brie"], "Briller");
    replaceTextInPage(["Brillerr"], "Briller");
    // replaceTextInPage(["布里亚医院"], "Briller");
    replaceTextInPage(["injection"], "Injection");
    replaceTextInPage(["Wellthera"], "Ulthera");
    replaceTextInPage(["울쎄라", "cry", "well"], "Ulthera");
    replaceTextInPage(["울쎄라"], "Ulthera");
    replaceTextInPage(["Briller, Ulthera"], "Briller Ulthera");
    replaceTextInPage(
      ["차정윤", "Cha Jeong- yoon", "Cha Jeong-yoon"],
      "Cha Jungyoon"
    );
    replaceTextInPage(["Rep. Briller"], "About BRILLER");
    replaceTextInPage(["Representative Briller"], "About BRILLER");
    replaceTextInPage(["Introduction of the medical staff"], "Doctor");
    replaceTextInPage(["Directions"], "Direction & Hour");
    replaceTextInPage(["Director"], "Doctor");
    replaceTextInPage(["Tensorma"], "10Therma");
    replaceTextInPage(["picore"], "Picore");
    replaceTextInPage(["About BRILLER's home."], "BRILLER");
    replaceTextInPage(["address"], "Address");
    replaceTextInPage(["subway"], "Subway");
    replaceTextInPage(["parking"], "Parking");
    replaceTextInPage(
      ["Valet booth next to Subway on the first floor of the building"],
      "Valet booth next to SUBWAY sandwich on the first floor of the building"
    );
    replaceTextInPage(["lunch"], "Lunch");
    replaceTextInPage(["no"], "No");
    replaceTextInPage(["public"], "Public");
    replaceTextInPage(["Briller의원의"], "브리에의원의");
    replaceTextInPage(["Briller의원"], "Briller Clinic");
    replaceTextInPage(["The Three Principles"], "Three Principles");
    replaceTextInPage(
      ["of the Council of Ministers of Brillerre"],
      "of the Briller"
    );
    replaceTextInPage(["Rep. Bree's House."], "BRILLER Clinic");
    replaceTextInPage(["Kakao inquiry"], "Kakao Inquiry");
    replaceTextInPage(["CEO"], "Dr.");
    replaceTextInPage(
      ["Current About BRILLER"],
      "Current Representative Doctor of the Briller Clinic"
    );
    replaceTextInPage(
      ["Current Doctor of Lee Hyunjae Dermatology Clinic"],
      "Former Doctor of Lee Hyunjae Dermatology Clinic"
    );
    replaceTextInPage(["During filler"], "Baby-Face Filler");
    replaceTextInPage(["Wrinkle filler"], "Wrinkle Filler");
    replaceTextInPage(["Scar filler"], "Scar Filler");
    replaceTextInPage(["Under eye filler"], "Under-eye Filler");
    replaceTextInPage(["Museline injection"], "Museline Injection");
    replaceTextInPage(["Types of fillers during"], "Filler Brand");
    replaceTextInPage(["Rejuvenel"], "Rejuviel");
    replaceTextInPage(["Jubidum"], "Juvederm");
    replaceTextInPage(["Silifting"], "Thread Lifting");
    replaceTextInPage(["Well then"], "Ulthera");
    replaceTextInPage(["anesthesia"], "Anesthesia");
    replaceTextInPage(["MoNosil", "Monosil"], "Mono Thread");
    replaceTextInPage(["Jeomin"], "Xeomin");
    replaceTextInPage(["Ultra Call/Juvelook"], "Ultracol/Juvelook");
    replaceTextInPage(["Face contour/line"], "Face Contouring");
    replaceTextInPage(["Piece"], "Sculpture");
    replaceTextInPage(["Skin care"], "Skin Care");
    replaceTextInPage(["Anti-aging/beauty lotion"], "Anti-Aging/Beauty IV");
    replaceTextInPage(["exohealer"], "Exohealer");
    replaceTextInPage(["NCTF Philmed"], "NCTF Fillmed");
    replaceTextInPage(["Laraphil"], "Lara Peeling");
    replaceTextInPage(["Lactobacillus Peel"], "Lactobacillus Peeling");
    replaceTextInPage(["Platinum Plafil"], "Platinum Pla Peeling");
    replaceTextInPage(["Black Phil"], "Black Peeling");
    replaceTextInPage(["Oxygen Phil"], "Oxygen Peeling");
    replaceTextInPage(["Rosephil"], "Rose Peeling");
    replaceTextInPage(["Pumpkin peel"], "Pumpkin Peeling");
    replaceTextInPage(["Whipped cream"], "Whipped Cream Peeling");
    replaceTextInPage(["Aquaphil"], "Aqua Peeling");
    replaceTextInPage(["Iontotherapy"], "Ion Therapy");
    // replaceTextInPage(["phil", "Peel", "fil", "Phil", "peel"], "Peeling");
    replaceTextInPage(
      ["SONo Ultrasonic Management"],
      "SONO Ultrasonic Management"
    );
    replaceTextInPage(["Baekokjusa"], "White Jade Injection");
    replaceTextInPage(
      ["the shining, more shining you"],
      "for you to shine and shine even more"
    );
    replaceTextInPage(
      [
        "Introducing Clarity Pro, for you who can shine and shine even brighter .",
      ],
      "Introducing Clarity Pro for you to shine and shine even more."
    );
    replaceTextInPage(["clear skin"], "Clear skin");
    replaceTextInPage(["Alex Stoneing"], "Alex Toning");
    replaceTextInPage(["American version of super voice knife"], "Ulthera");
    replaceTextInPage(["Korean version of Hot Margil"], "10Therma");
    // replaceTextInPage(["韩版超声刀宇宙版"], "Shurink Universe");
    replaceTextInPage(["the Council of Ministers of Brillere"], "the Briller");
    replaceTextInPage(["Ulthera, Ulthera"], "Ulthera");
    replaceTextInPage(["Dr. Briller"], "Briller");
    replaceTextInPage(["Brier"], "Briller");
    replaceTextInPage(["announcement"], "Announcement");
  } else if (currentLang === "zhCN") {
    replaceTextInPage(["Brie Clinic"], "布里亚医院");
    replaceTextInPage(["Brie"], "布里亚医院");
    replaceTextInPage(["브리에의원"], "布里亚医院");
    replaceTextInPage(["Briller"], "布里亚医院");
    replaceTextInPage(["我的天啊"], "美版超声刀");
    replaceTextInPage(["超级大剑"], "美版超声刀");
    replaceTextInPage(["Ulthera"], "美版超声刀");
    
    replaceTextInPage(["텐써마"], "韩版热玛吉");
    replaceTextInPage(["韩国人"], "韩版热玛吉");
    replaceTextInPage(["滕西马"], "韩版热玛吉");
    replaceTextInPage(["缩小宇宙"], "韩版超声刀宇宙版");
    replaceTextInPage(["处于模式中"], "Inmode");
    replaceTextInPage(["皮科雷"], "皮秒激光");
    replaceTextInPage(["清晰度专业版"], "Clarity色素激光");
    replaceTextInPage(["二氧化碳"], "去痣激光");
    replaceTextInPage(["贝洛特罗"], "保柔缇");
    replaceTextInPage(["超V压花模具"], "Ultra V蛋白线");
    replaceTextInPage(["新勒克斯"], "韩国国产");
    replaceTextInPage(["核心毒物"], "韩国Coretox");
    replaceTextInPage(["西奥明"], "德国西马");
    replaceTextInPage(["面部轮廓/线条"], "轮廓注射");
    replaceTextInPage(["缪斯线注入"], "缪斯溶脂针");
    replaceTextInPage(["轮廓扫描"], "轮廓针");
    replaceTextInPage(["片注入"], "雕塑轮廓针");
    replaceTextInPage(["皮肤促进剂"], "水光针");
    replaceTextInPage(["瑞朱兰治疗师"], "丽珠兰黑盒");
    replaceTextInPage(["超级呼叫 100"], "Ultracol100胶原水光");
    replaceTextInPage(["Jube Lux 皮肤"], "Juvelook Skin胶原水光");
    replaceTextInPage(["exo治疗师"], "外泌体");
    replaceTextInPage(["百合M"], "Lilied水光针");
    replaceTextInPage(["NCTF 拍摄"], "香奈儿针");
    replaceTextInPage(["Ultra Call/Jub Look"], "胶原蛋白");
    replaceTextInPage(["Ultracol/Juve Look"], "胶原蛋白");
    replaceTextInPage(["高级汽车管理"], "高级皮肤管理套餐");
    replaceTextInPage(["拉拉非"], "拉拉焕肤");
    replaceTextInPage(["24K金疗法"], "24K黄金皮肤管理");
    replaceTextInPage(["多克斯"], "补水管理");
    replaceTextInPage(["乳酸菌换肤&安瓶护理"], "乳酸菌焕肤&安瓶管理");
    replaceTextInPage(["铂金翻瓣"], "去角质管理");
    replaceTextInPage(["黑色药丸"], "控油焕肤");
    replaceTextInPage(["氧气丸"], "氧气焕肤");
    replaceTextInPage(["玫瑰皮"], "玫瑰焕肤");
    replaceTextInPage(["南瓜皮"], "南瓜焕肤");
    replaceTextInPage(["鲜奶油皮"], "奶油焕肤");
    replaceTextInPage(["水漾果皮"], "小气泡管理");
    replaceTextInPage(["离子土壤管理"], "美白管理");
    replaceTextInPage(["SONO 超声管理"], "超音波管理");
    replaceTextInPage(["冷冻细胞"], "低温管理");
    replaceTextInPage(["依托体，金PTT"], "黄金PTT管理");
    replaceTextInPage(["去痣激光"], "点痣激光");
    replaceTextInPage(["前"], "前任");
    replaceTextInPage(["制造部"], "布里亚医院");
    replaceTextInPage(["Clariti Pro"], "Clarity Pro");
    replaceTextInPage(["超声刀"], "美版超声刀");
    replaceTextInPage(["美版美版超声刀"], "美版超声刀");
    replaceTextInPage(["点痣激光"], "去痣激光");
    replaceTextInPage(["SONO超声管理"], "超声管理");
    replaceTextInPage(["Clarity色素激光"], "深层色斑激光");
    replaceTextInPage(["去痣激光"], "点痣激光");
    replaceTextInPage(["Fabrication Co., Ltd."], "布里亚医院");
    replaceTextInPage(["制造及制造中心"], "布里亚医院");

  } else if (currentLang === "ko") {
    replaceTextInPage(["Briller"], "브리에");
    replaceTextInPage(["Ulthera"], "울쎄라");
    replaceTextInPage(["Cha Jungyoon"], "차정윤");
    replaceTextInPage(["SONO Ultrasonic Management"], "SONO 초음파관리");
    replaceTextInPage(["布里亚医院"], "브리에의원");
    replaceTextInPage(["美版超声刀"], "울쎄라");
    replaceTextInPage(["韩版热玛吉"], "텐써마");
    replaceTextInPage(["브리에 Clinic"], "브리에의원");
    replaceTextInPage(["브리에의원 Clinic"], "브리에의원");
    replaceTextInPage(["韩版超声刀宇宙版"], "슈링크유니버스");

    const flex = document.querySelectorAll(
      ".tentherma-wrap .tentherma-detail-process .tentherma-detail-process-flex-wrap .process-flex"
    );

    flex.forEach((el) => {
      el.style.maxWidth = "";
    });
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

// document.addEventListener("DOMContentLoaded", () => {
//   // 현재 언어를 localStorage에서 가져오는 함수
//   function getCurrentLanguage() {
//     return localStorage.getItem("selectedLang") || "ko";
//   }

//   // 모든 <br> 태그 제거
//   function removeAllBrTags() {
//     const elements = document.querySelectorAll("p");
//     elements.forEach((el) => {
//       const originalText = el.getAttribute("data-original-text");
//       if (originalText) {
//         el.innerHTML = originalText; // 초기 텍스트로 복원
//       }
//     });
//   }

//   // 50자마다 <br> 삽입
//   function addBrEvery50Characters() {
//     const elements = document.querySelectorAll("p");
//     elements.forEach((el) => {
//       const originalText =
//         el.getAttribute("data-original-text") || el.textContent.trim();
//       if (!el.hasAttribute("data-original-text")) {
//         el.setAttribute("data-original-text", originalText); // 초기 텍스트 저장
//       }

//       if (originalText.length > 2) {
//         const updatedText = originalText.replace(/(.{50})/g, "$1<br>");
//         el.innerHTML = updatedText; // 텍스트를 <br> 추가된 HTML로 설정
//       }
//     });
//   }

//   // 언어에 따른 동작 처리
//   function applyLanguageSpecificRules() {
//     const currentLang = getCurrentLanguage();

//     if (currentLang === "en") {
//       removeAllBrTags(); // 기존 <br> 태그 제거
//       addBrEvery50Characters(); // 50자마다 <br> 삽입
//     } else {
//       removeAllBrTags(); // 다른 언어는 초기 상태로 복원
//     }
//   }

//   // 초기 실행
//   applyLanguageSpecificRules();

//   // 언어 변경 시 동작
//   const languageButtons = document.querySelectorAll("[data-lang]");
//   languageButtons.forEach((button) => {
//     button.addEventListener("click", (event) => {
//       const selectedLang = event.target.getAttribute("data-lang");
//       if (selectedLang) {
//         localStorage.setItem("selectedLang", selectedLang);
//         applyLanguageSpecificRules(); // 새로고침 없이 즉시 규칙 적용
//       }
//     });
//   });
// });

// const btns = document.querySelectorAll(".menu .language-wrap .lang-wrap");

// btns.forEach((el) => {
//   el.addEventListener("click", () => {
//     console.log("btn click");

//     const language = localStorage.getItem("selectedLang");
//     const breakSpace = document.querySelectorAll(".en");

//     if (language === "en") {
//       breakSpace.forEach((bs) => {
//         bs.style.display = "block";
//       });
//     } else {
//       breakSpace.forEach((bs) => {
//         bs.style.display = "none";
//       });
//     }
//   });
// });

// window.addEventListener("load", () => {
//   const language = localStorage.getItem("selectedLang");
//   const breakSpace = document.querySelectorAll(".en");

//   if (language === "en") {
//     breakSpace.forEach((bs) => {
//       bs.style.display = "block";
//     });
//   } else {
//     breakSpace.forEach((bs) => {
//       bs.style.display = "none";
//     });
//   }
// });

//     const language = localStorage.getItem("selectedLang");
// const breakSpace = document.querySelectorAll(".en");

// if (language === "en") {
//   breakSpace.forEach((bs) => {
//     bs.style.display = "block";
//   });
// } else {
//   breakSpace.forEach((bs) => {
//     bs.style.display = "none";
//   });
// }

window.addEventListener("load", () => {
  const getLang = localStorage.getItem("selectedLang");
  const timeWrap = document.querySelector(
    ".location-time-wrap .wrap .time-wrap"
  );

  if (timeWrap) {
    const rootStyle = document.documentElement.style;
    if (getLang === "en" && window.innerWidth > 767) {
      rootStyle.setProperty("--hour-bar-left", "95px");
    } else if (getLang === "en" && window.innerWidth <= 767) {
      rootStyle.setProperty("--hour-bar-left", "70px");
    } else {
      rootStyle.setProperty("--hour-bar-left", "50px");
    }
  }
});
window.addEventListener("resize", () => {
  const getLang = localStorage.getItem("selectedLang");
  const timeWrap = document.querySelector(
    ".location-time-wrap .wrap .time-wrap"
  );

  if (timeWrap) {
    const rootStyle = document.documentElement.style;
    if (getLang === "en" && window.innerWidth > 767) {
      rootStyle.setProperty("--hour-bar-left", "95px");
    } else if (getLang === "en" && window.innerWidth <= 767) {
      rootStyle.setProperty("--hour-bar-left", "70px");
    } else {
      rootStyle.setProperty("--hour-bar-left", "");
    }
  } else {
    console.error("The '.time-wrap' element was not found.");
  }
});

window.addEventListener("storage", (event) => {
  if (event.key === "selectedLang") {
    console.log(`Language changed to: ${event.newValue}`);
    handleLanguageChange(event.newValue);
  }
});

function handleLanguageChange(newLang) {
  const getLang = localStorage.getItem("selectedLang");
  const timeWrap = document.querySelector(
    ".location-time-wrap .wrap .time-wrap"
  );

  if (timeWrap) {
    const rootStyle = document.documentElement.style;
    if (getLang === "en" && window.innerWidth > 767) {
      rootStyle.setProperty("--hour-bar-left", "95px");
    } else if (getLang === "en" && window.innerWidth <= 767) {
      rootStyle.setProperty("--hour-bar-left", "70px");
    } else {
      rootStyle.setProperty("--hour-bar-left", "");
    }
  }
}
  // const hamMenuBtn = document.querySelector("#header .menu .ham-menu-img-wrap");
  // const hamMenuIcon = document.querySelector(
  //   "#header .menu .ham-menu-img-wrap i"
  // );
  // const quickFormOpenBtn = document.querySelector(".quick-form-wrap");

  // hamMenuBtn.addEventListener("click", () => {
  //   if (hamMenuIcon.className === "xi-bars") {
  //     quickFormOpenBtn.classList.remove("none"); // 버튼 숨기기
  //   } else {
  //     quickFormOpenBtn.classList.add("none");
  //   }
  // });
