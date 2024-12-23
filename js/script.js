
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
    // const docName = document.querySelector(".doctor-info-wrap .doctor-info-text-wrap .doctor-name");
    const currentLang = getCurrentLanguage();
    if (currentLang === "en") {
      const flex = document.querySelectorAll(".tentherma-wrap .tentherma-detail-process .tentherma-detail-process-flex-wrap .process-flex");

      flex.forEach((el) => {
        el.style.maxWidth = "405px";
      })


      replaceTextInPage(
        ["The Three Principles of the Council of Ministers of Briere", "The Three Principles of the Council of Ministers of Brillerre", "Rep. Briller's Three Principles", "브리에의원의 3가지 원칙", "Briller의원의 3가지 원칙"],
        "Three Principles of the Briller"
      );
      replaceTextInPage(["브리에", "Brie"], "Briller");
      replaceTextInPage(["布里亚医院"], "Briller");
      replaceTextInPage(["injection"], "Injection");
      replaceTextInPage(["울쎄라", "cry", "well"], "Ulthera");
      replaceTextInPage(["차정윤", "Cha Jeong- yoon", "Cha Jeong-yoon"], "Cha Jungyoon");
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
      replaceTextInPage(["Valet booth next to Subway on the first floor of the building"], "Valet booth next to SUBWAY sandwich on the first floor of the building");
      replaceTextInPage(["lunch"], "Lunch");
      replaceTextInPage(["no"], "No");
      replaceTextInPage(["public"], "Public");
      replaceTextInPage(["Briller의원의"], "브리에의원의");
      replaceTextInPage(["Briller의원"], "Briller Clinic");
      replaceTextInPage(["The Three Principles"], "Three Principles");
      replaceTextInPage(["of the Council of Ministers of Brillerre"], "of the Briller");
      replaceTextInPage(["Rep. Bree's House."], "BRILLER Clinic");
      replaceTextInPage(["Kakao inquiry"], "Kakao Inquiry");
      replaceTextInPage(["CEO"], "Dr.");
      replaceTextInPage(["Current About BRILLER"], "Current Representative Doctor of the Briller Clinic");
      replaceTextInPage(["Current Doctor of Lee Hyunjae Dermatology Clinic"], "Former Doctor of Lee Hyunjae Dermatology Clinic");
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
      replaceTextInPage(["SONo Ultrasonic Management"], "SONO Ultrasonic Management");
      replaceTextInPage(["Baekokjusa"], "White Jade Injection");
      replaceTextInPage(["the shining, more shining you"], "for you to shine and shine even more");
      replaceTextInPage(["Introducing Clarity Pro, for you who can shine and shine even brighter ."], "Introducing Clarity Pro for you to shine and shine even more.");
      replaceTextInPage(["clear skin"], "Clear skin");
      replaceTextInPage(["Alex Stoneing"], "Alex Toning");
      replaceTextInPage(["American version of super voice knife"], "Ulthera");
      replaceTextInPage(["Korean version of Hot Margil"], "10Therma");
      replaceTextInPage(["韩版超声刀宇宙版"], "Shurink Universe");
      
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



    } else if (currentLang === "ko") {
      replaceTextInPage(["Briller"], "브리에");
      replaceTextInPage(["Ulthera"], "울쎄라");
      replaceTextInPage(["Cha Jungyoon"], "차정윤");
      replaceTextInPage(["SONO Ultrasonic Management"], "SONO 초음파관리");
      replaceTextInPage(["布里亚医院"], "브리에의원");
      replaceTextInPage(["美版超声刀"], "울쎄라");
      replaceTextInPage(["韩版热玛吉"], "텐써마");
      replaceTextInPage(["브리에 Clinic"], "브리에의원");
      replaceTextInPage(["韩版超声刀宇宙版"], "슈링크유니버스");

      const flex = document.querySelectorAll(".tentherma-wrap .tentherma-detail-process .tentherma-detail-process-flex-wrap .process-flex");

      flex.forEach((el) => {
        el.style.maxWidth = "";
      })
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
