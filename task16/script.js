import MomentModule from "./task16.js";

const dateMoment = new MomentModule();

const eDisplayMoment = document.getElementById('displayMoment');
eDisplayMoment.innerHTML = dateMoment.getFullDate();
// eDisplayMoment.innerHTML = dateMoment.getShortDate();
// eDisplayMoment.innerHTML = dateMoment.getYear();
