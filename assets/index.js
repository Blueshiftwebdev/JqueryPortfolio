const navToggle = $("#navToggle");
const navBar = $("#navBar");
const barOne = $("#barOne");
const barTwo = $("#barTwo");
const barThree = $("#barThree");

// navOpen animation
const open = () => {
  navBar.addClass("nav-bar-open");
  navBar.removeClass("nav-bar-close");
  navBar.addClass("visible");
  barOne.addClass("bar-one-transition");
  barTwo.addClass("bar-two-transition");
  barThree.addClass("bar-three-transition");
  setTimeout(() => {
    navBar.removeClass("nav-bar-open");
    navBar.removeClass("nav-bar-close");
    barOne.addClass('bar-one-hold');
    barOne.removeClass("bar-one-transition");
    barTwo.removeClass("bar-two-transition");
    barTwo.addClass('bar-two-hold')
    barThree.removeClass("bar-three-transition");
    barThree.addClass("bar-three-hold");

  }, 300);
};

//navClose animation
const close = () => {
  navBar.addClass("nav-bar-close");
  navBar.removeClass("nav-bar-open");
  barOne.addClass("bar-one-transition-out");
  barOne.removeClass('bar-one-hold');
  barTwo.addClass("bar-two-transition-out");
  barTwo.removeClass('bar-two-hold')
  barThree.addClass("bar-three-transition-out");
  barThree.removeClass("bar-three-hold");
  setTimeout(() => {
    navBar.removeClass("nav-bar-open");
    navBar.removeClass("nav-bar-close");
    navBar.removeClass("visible");
    barOne.removeClass("bar-one-transition-out");
    barTwo.removeClass("bar-two-transition-out");
    barThree.removeClass("bar-three-transition-out");
  }, 300);
};

//nav event listener
navToggle.click((e) => {
  if (navBar.hasClass("visible")) {
    close();
  } else {
    open();
  }
});
