$(function () {
  $("#about").on("click", function () {
    $("html, body").animate(
      { scrollTop: $(".about-section").offset().top },
      1000
    );
  });
});

$(function () {
  $("#features").on("click", function () {
    $("html, body").animate(
      { scrollTop: $(".features-section-wrapper").offset().top },
      1000
    );
  });
});

$(function () {
  $("#download").on("click", function () {
    $("html, body").animate(
      { scrollTop: $(".download-section").offset().top },
      1000
    );
  });
});

$(function () {
  $("#get-app-btn").on("click", function () {
    $("html, body").animate(
      { scrollTop: $(".download-section").offset().top },
      1000
    );
  });
});

$(function () {
  $("#contact").on("click", function () {
    $("html, body").animate(
      { scrollTop: $(".form-section-wrapper").offset().top },
      1000
    );
  });
});

const langEl = document.querySelector(".langWrap");
const link = document.querySelectorAll(".langWrap li");
const aboutLink = document.querySelector("#about");
const featuresLink = document.querySelector("#features");
const downloadLink = document.querySelector("#download");
const contactLink = document.querySelector("#contact");
const titleEl = document.querySelector("#title");
const descEl = document.querySelector("#desc");
const aboutEl = document.querySelector(".about-left h2");
const moreAboutEl = document.querySelector(".about-left p");
const getAppEl = document.querySelector("#get-app-btn");
const freeEl = document.querySelector(".download-section h1");
const talkEl = document.querySelector(".form-section-wrapper h1");
const moreTalkEl = document.querySelector(".form-section-wrapper p");
const exFeaturesEl = document.querySelector(".features-section-wrapper h2");
const moreFeaturesEl = document.querySelector(".features-section-wrapper span");
const multAccEl = document.querySelector(".accounts h4");
const moreAccEl = document.querySelector(".accounts p");
const billEl = document.querySelector(".bill h4");
const moreBillEl = document.querySelector(".bill p");
const outageEl = document.querySelector(".outage h4");
const moreOutageEl = document.querySelector(".outage p");
const appsEl = document.querySelector(".applications h4");
const moreAppsEl = document.querySelector(".applications p");
const usageEl = document.querySelector(".usage h4");
const moreUsageEl = document.querySelector(".usage p");
const nameEl = document.querySelector("#nameEl");
const emailEl = document.querySelector("#emailEl");
const commentEl = document.querySelector("#commentEl");
const sendBtnEl = document.querySelector(".form-section-wrapper button");

link.forEach((el) => {
  el.addEventListener("click", () => {
    langEl.querySelector(".active").classList.remove("active");
    el.classList.add("active");

    const attr = el.getAttribute("language");
    titleEl.textContent = data[attr].title;
    descEl.textContent = data[attr].desc;
    aboutLink.textContent = data[attr].navLinks.about;
    featuresLink.textContent = data[attr].navLinks.features;
    downloadLink.textContent = data[attr].navLinks.download;
    contactLink.textContent = data[attr].navLinks.contact;
    aboutEl.textContent = data[attr].aboutUs;
    moreAboutEl.textContent = data[attr].moreAboutUs;
    getAppEl.textContent = data[attr].getApp;
    freeEl.textContent = data[attr].freeDownload;
    talkEl.textContent = data[attr].letsTalk;
    moreTalkEl.textContent = data[attr].moreTalk;
    exFeaturesEl.textContent = data[attr].exclusiveFeatures;
    moreFeaturesEl.textContent = data[attr].moreFeatures;
    multAccEl.textContent = data[attr].multAcc;
    moreAccEl.textContent = data[attr].moreMultAcc;
    billEl.textContent = data[attr].bill;
    moreBillEl.textContent = data[attr].moreBill;
    outageEl.textContent = data[attr].outage;
    moreOutageEl.textContent = data[attr].moreOutage;
    appsEl.textContent = data[attr].apps;
    moreAppsEl.textContent = data[attr].moreApps;
    usageEl.textContent = data[attr].usage;
    moreUsageEl.textContent = data[attr].moreUsage;
    nameEl.textContent = data[attr].name;
    emailEl.textContent = data[attr].email;
    commentEl.textContent = data[attr].comment;
    sendBtnEl.textContent = data[attr].sendBtn;
  });
});

var data = {
  english: {
    title: "One-stop app to manage your utility services",
    desc: "Utilix empowers utility providers and customers by aligning their needs through an advanced digital platform. User-friendly apps and AI-backed algorithms enable utility customers to make informed decisions and ensure the safe and sustainable use of energy resources.",
    navLinks: {
      about: "About Us",
      features: "Features",
      download: "Download App",
      contact: "Contact Us",
    },
    aboutUs:
      "Utilix is a product of FavorIT Solutions, a software development company based in Tbilisi, Georgia.",
    moreAboutUs:
      "We are a team of talented and passionate people with a relevant domain expertise and advanced software engineering skills. We strive to build innovative solutions for both enterprises and end-users to solve their real life problems and improve their digital experience.",
    getApp: "GET APP NOW",
    freeDownload: "It’s free to download and get started",
    letsTalk: "Let's Talk",
    moreTalk:
      "Do not hesitate to ask something or share your opinion. Just enter your name, email and we will get your message.",
    exclusiveFeatures: "Exclusive Features",
    moreFeatures:
      "An analytics-driven digital self-service platform that enables customers to seamlessly interact with their utilities.",
    multAcc: "Multiple Accounts",
    moreMultAcc:
      "It is a one-stop solution for managing all utility accounts across all your homes.",
    bill: "Bill & Payment",
    moreBill:
      "Get your bills, make secure payments and manage all billing and payment functions from your mobile app.",
    outage: "Outage",
    moreOutage:
      "Receive timely outage notifications, check updated outage statuses and report directly to the utilities provider if there is any supply issue.",
    apps: "Applications",
    moreApps:
      "No need to go to customer service offices. Just apply from your app and track the status of your application online.",
    usage: "Usage",
    moreUsage:
      "Monitor your usage, compare your bills and get personalized energy usage tips.",
    name: "Name",
    email: "Email",
    comment: "Comment",
    sendBtn: "Send",
  },
  japanese: {
    title: "ერთსტრიკიანი აპლიკაცია თქვენი კომუნალური მომსახურების სამართავად",
    desc: "Utilix საშუალებას აძლევს კომუნალური პროვაიდერებს და მომხმარებლებს მოწინავე ციფრული პლატფორმის საშუალებით მათი საჭიროებების გასწორებით. მოსახერხებელი პროგრამები და AI– ს მხარდაჭერილი ალგორითმები საშუალებას აძლევს კომუნალური მომხმარებლებს მიიღონ ინფორმირებული გადაწყვეტილებები და უზრუნველყონ ენერგიის რესურსების უსაფრთხო და მდგრადი გამოყენება.",
    navLinks: {
      about: "ჩვენს შესახებ",
      features: "მახასიათებლები",
      download: "ჩამოტვირთეთ აპლიკაცია",
      contact: "დაგვიკავშირდით",
    },
    aboutUs:
      "Utilix არის პროგრამული უზრუნველყოფის შემქმნელი კომპანიის FavorIT Solutions- ის პროდუქტი, რომელიც მდებარეობს თბილისში, საქართველოში.",
    moreAboutUs:
      "ჩვენ ვართ ნიჭიერი და მგზნებარე ადამიანების გუნდი, რომელსაც გააჩნია დომენის შესაბამისი ექსპერტიზა და პროგრამული უზრუნველყოფის ინჟინერიის თანამედროვე შესაძლებლობები. ჩვენ ვცდილობთ შევქმნათ ინოვაციური გადაწყვეტილებები, როგორც საწარმოების, ასევე საბოლოო მომხმარებლებისთვის, მათი რეალური ცხოვრების პრობლემების გადასაჭრელად და მათი ციფრული გამოცდილების გასაუმჯობესებლად.",
    getApp: "ჩამოტვირთეთ აპლიკაცია",
    freeDownload: "უფასოა ჩამოტვირთვისა და დასაწყებად",
    letsTalk: "მოდი ვისაუბროთ",
    moreTalk:
      "ნუ მოგერიდებათ რამის კითხვა ან თქვენი აზრის გაზიარება. უბრალოდ შეიყვანეთ თქვენი სახელი, ელ.წერილი და მივიღებთ თქვენს შეტყობინებას.",
    exclusiveFeatures: "ექსკლუზიური მახასიათებლები",
    moreFeatures:
      "ანალიტიკის საფუძველზე ციფრული თვითმომსახურების პლატფორმა, რომელიც მომხმარებელს საშუალებას აძლევს უპრობლემოდ იურთიერთონ თავიანთ კომუნალური პროგრამებთან.",
    multAcc: "მრავალი ანგარიში",
    moreMultAcc:
      "ეს არის ერთჯერადი გადაწყვეტა ყველა კომუნალური ანგარიშის მართვისთვის თქვენს ყველა სახლში.",
    bill: "გადასახადი და გადახდა",
    moreBill:
      "მიიღეთ გადასახადები, გააკეთეთ უსაფრთხო გადახდები და მართეთ ბილინგისა და გადახდის ყველა ფუნქცია თქვენი მობილური აპიდან.",
    outage: "გათიშვა",
    moreOutage:
      "დროულად მიიღეთ შეტყობინებები გათიშვის შესახებ, შეამოწმეთ გათიშვის განახლებული სტატუსები და შეატყობინეთ უშუალოდ კომუნალური მომსახურების პროვაიდერს, თუ რაიმე პრობლემა გაქვთ.",
    apps: "განცხადებები",
    moreApps:
      "საჭირო არ არის მომხმარებელთა მომსახურების ოფისებში მისვლა. უბრალოდ მიმართეთ თქვენი აპიდან და მიყევით თქვენი განაცხადის სტატუსს ინტერნეტით.",
    usage: "გამოყენება",
    moreUsage:
      "გააკონტროლეთ თქვენი გამოყენება, შეადარეთ გადასახადები და მიიღეთ პერსონალურად მინიშნებები ენერგიის გამოყენების შესახებ.",
    name: "სახელი",
    email: "გვარი",
    comment: "კომენტარი",
    sendBtn: "გაგზავნა",
  },
};

var form = document.getElementById("form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        status.style.background = "#43d3aa25";
        status.style.color = "#43d3ab";
        form.reset()
        setTimeout(function () {
          status.style.display = "none";
        }, 3000)
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form";
        status.style.background = "#ff3a3046";
        status.style.color = "#FF3B30";
        setTimeout(function () {
          status.style.display = "none";
        }, 3000)
      });
    }
    form.addEventListener("submit", handleSubmit)


const btnScrollToTop = document.querySelector(".btn-scroll-to-top");

const refreshBtnVisibility = () => {
  if (document.documentElement.scrollTop <= 350) {
    btnScrollToTop.style.display = "none";
  } else {
    btnScrollToTop.style.display = "block";
  }
};
refreshBtnVisibility();

btnScrollToTop.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
  refreshBtnVisibility();
});

// const openMenu = document.querySelector(".burger");
// const closeMenu = document.querySelector(".close-menu");
// const menu = document.querySelector(".menu");

// openMenu.addEventListener("click", function () {
//   menu.style.display = "block";
//   menu.style.right = "0";
// });

// closeMenu.addEventListener("click", function () {
//   menu.style.right = "-60%";
// });
