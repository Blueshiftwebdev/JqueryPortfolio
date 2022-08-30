const navToggle = $("#navToggle");
const navBar = $("#navBar");
const barOne = $("#barOne");
const barTwo = $("#barTwo");
const barThree = $("#barThree");
const navLinkOne = $("#navLinkOne");
const navLinkTwo = $("#navLinkTwo");
const navLinkThree = $("#navLinkThree");
const navBarFooter = $("#navBarFooter");
// navOpen animation
const open = () => {
  navBar.addClass("nav-bar-open");
  navBar.addClass("visible");
  barOne.addClass("bar-one-transition");
  barTwo.addClass("bar-two-transition");
  barThree.addClass("bar-three-transition");
  setTimeout(() => {
    navLinkOne.addClass("nav-link-fade-in");
    setTimeout(() => {
      navLinkTwo.addClass("nav-link-fade-in");
      setTimeout(() => {
        navLinkThree.addClass("nav-link-fade-in");
        setTimeout(() => {
          navBarFooter.addClass("nav-link-fade-in");
        }, 200);
      }, 200);
    }, 200);
    navBar.removeClass("nav-bar-open");
    barOne.removeClass("bar-one-transition");
    barOne.addClass("bar-one-hold");
    barTwo.removeClass("bar-two-transition");
    barTwo.addClass("bar-two-hold");
    barThree.addClass("bar-three-hold");
    barThree.removeClass("bar-three-transition");
   
  }, 300);
};

//navClose animation
const close = () => {
  navLinkOne.removeClass("nav-link-fade-in");
  navLinkTwo.removeClass("nav-link-fade-in");
  navLinkThree.removeClass("nav-link-fade-in");
  navBarFooter.removeClass("nav-link-fade-in");
  navLinkOne.addClass("nav-link-fade-out");
  navLinkTwo.addClass("nav-link-fade-out");
  navLinkThree.addClass("nav-link-fade-out");
  navBarFooter.addClass("nav-link-fade-out");
  setTimeout(() => {
    navBar.addClass("nav-bar-close");
    navBar.removeClass("nav-bar-open");
    barOne.addClass("bar-one-transition-out");
    barOne.removeClass("bar-one-hold");
    barTwo.addClass("bar-two-transition-out");
    barTwo.removeClass("bar-two-hold");
    barThree.addClass("bar-three-transition-out");
    barThree.removeClass("bar-three-hold");
    setTimeout(() => {
      navBar.removeClass("nav-bar-open");
      navBar.removeClass("nav-bar-close");
      navBar.removeClass("visible");
      barOne.removeClass("bar-one-transition-out");
      barTwo.removeClass("bar-two-transition-out");
      barThree.removeClass("bar-three-transition-out");
      navBarFooter.removeClass("nav-link-fade-out");
      navLinkOne.removeClass("nav-link-fade-out");
      navLinkTwo.removeClass("nav-link-fade-out");
      navLinkThree.removeClass("nav-link-fade-out");
    }, 300);
  }, 250);
};

//nav event listener
navToggle.click((e) => {
  if (navBar.hasClass("visible")) {
    close();
  } else {
    open();
  }
});
