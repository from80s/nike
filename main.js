function showMenuMobile(hamburguer, navMobile) {
  hamburguer.firstElementChild.classList.add("hidden");
  hamburguer.lastElementChild.classList.remove("hidden");
  navMobile.classList.add("active");
  navMobile.setAttribute("aria-expanded", "true");
}

function hideMenuMobile(hamburguer, navMobile) {
  console.log("hideMenuMobile");
  hamburguer.firstElementChild.classList.remove("hidden");
  hamburguer.lastElementChild.classList.add("hidden");
  navMobile.classList.remove("active");
  navMobile.setAttribute("aria-expanded", "false");
}

function ariaHidden(hamburguer, nav, navMobile) {
  if (window.innerWidth <= 768) {
    hamburguer.setAttribute("aria-hidden", "false");
    navMobile.setAttribute("aria-hidden", "false");
    nav.lastElementChild.setAttribute("aria-hidden", "true");
  }
  else {
    hamburguer.setAttribute("aria-hidden", "true");
    navMobile.setAttribute("aria-hidden", "true");
    nav.lastElementChild.setAttribute("aria-hidden", "false");
  }
}


window.addEventListener("DOMContentLoaded", function (ev) {
  const hamburguer = document.querySelector(".hamburguer");
  const nav = document.querySelector(".nav:not(.mobile)");
  const navMobile = document.querySelector(".nav.mobile");
  let isMobile = false;

  ariaHidden(hamburguer, nav, navMobile);

  window.addEventListener("resize", ariaHidden.bind(null, hamburguer, nav, navMobile));

  hamburguer.addEventListener("click", function (ev) {
    if (!isMobile) {
      showMenuMobile(hamburguer, navMobile);
      isMobile = true;
    } else {
      hideMenuMobile(hamburguer, navMobile);
      isMobile = false;
    }
  });

});

