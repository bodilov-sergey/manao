//@@@ External dependencies

import "./styles/style.scss";
import "bootstrap/scss/bootstrap.scss";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";

//@@@ Internal dependencies

import toggleHeaderScrollClass from "./components/toggle-header-scroll-class";
import handleFormSubmission from "./components/handle-form-submission";
import swiper from "./components/swiper";

document.addEventListener("DOMContentLoaded", () => {
  toggleHeaderScrollClass();
  handleFormSubmission(bootstrap.Modal);
  swiper();
});
