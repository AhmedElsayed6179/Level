$(function () {
  $("#inputCheckIn").datepicker();
  $("#InputCheckOut").datepicker();

  $(".level-slider").slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    infinite: true,
    pauseOnHover: true,
  });

  function videoToggle() {
    video = $(".level-video").get(0);

    if (video.paused) {
      video.play();
      $(".video-control-play").hide();
      $(".video-control-pause").show();
    } else {
      video.pause();
      $(".video-control-play").show();
      $(".video-control-pause").hide();
    }
  }

  $(".video-control-play").click(function () {
    videoToggle();
  });
  $(".video-control-pause").click(function () {
    videoToggle();
  });
});

const links = document.querySelectorAll(".star-places-body a");
const sections = document.querySelectorAll(".section");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);

    if (targetSection.classList.contains("active")) {
      targetSection.classList.remove("active");
    } else {
      sections.forEach((sec) => sec.classList.remove("active"));
      targetSection.classList.add("active");
    }
  });
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Preloader hide after page load
window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }, 500);
});

const checkBtn = document.getElementById("checkBtn");
const formroom = checkBtn.closest("form");

checkBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // نجمع كل الحقول داخل الفورم (input و select)
  const inputs = formroom.querySelectorAll("input, select");
  let allFilled = true;

  inputs.forEach((field) => {
    if (
      field.value.trim() === "" ||
      field.value === "Rooms" ||
      field.value === "Adults" ||
      field.value === "Children Rooms"
    ) {
      allFilled = false;
    }
  });

  if (allFilled) {
    alert("Processing your request... This will be handled soon.");
  } else {
    alert("Please fill in all fields before checking.");
  }
});

const checkSubscribe = document.getElementById("checkSubscribe");

checkSubscribe.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Processing your request... This will be handled soon.");
});

const readMoreBtns = document.querySelectorAll(".readMoreBtn");

readMoreBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    alert(
      "If you would like to know more, please visit us or contact us at your earliest convenience."
    );
  });
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Internet error. Please check your connection and try again.");
});
