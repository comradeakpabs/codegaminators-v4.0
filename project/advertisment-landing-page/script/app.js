// toggle (add or remove) the class 'visible'
const doToggling = ({ currentTarget: tooltip }) =>
  tooltip.nextElementSibling.classList.toggle("visible");

// when 'tooltip-toggle' span is clicked call doToggling
const readyDOM = () =>
  document
    .querySelector("#tooltip-toggle")
    .addEventListener("click", doToggling, false);

// await DOM load
window.addEventListener("load", readyDOM, false);
