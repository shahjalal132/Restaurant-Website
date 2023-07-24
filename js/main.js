// Counter Design with raw JavaScript

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }

  counter("count1", 0, 4152, 3000);
  counter("count2", 100, 2145, 2500);
  counter("count3", 70, 3451, 2000);
  counter("count4", 50, 2548, 2500);
});

// Active navbar with jQuery

$(document).ready(function () {
  $(window).scroll(function () {
    var scrooltop = $(window).scrollTop();

    if (scrooltop > 20) {
      $(".navigation-wrap").addClass("scrool-on");
    } else {
      $(".navigation-wrap").removeClass("scrool-on");
    }
  });
});

// Navbar Hide with raw JavaScript

/* let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
}); */

// Navbar Hide with jQuery

$(document).ready(function () {
  $(".nav-link").click(function () {
    $(".navbar-collapse.collapse").removeClass("show");
  });
});
