var buttonSearch=document.querySelector(".modal-item-search"),modalSearch=document.querySelector(".modal-search"),inputSearch=modalSearch.querySelector("#search");buttonSearch.addEventListener("mouseover",function(a){a.preventDefault(),modalSearch.classList.add("modal-show"),inputSearch.focus()}),buttonSearch.addEventListener("mouseout",function(a){a.preventDefault(),modalSearch.classList.remove("modal-show")}),modalSearch.addEventListener("mouseover",function(a){a.preventDefault(),modalSearch.classList.add("modal-show")}),modalSearch.addEventListener("mouseout",function(a){a.preventDefault(),modalSearch.classList.remove("modal-show")});var buttonLogin=document.querySelector(".modal-item-login"),modalLogin=document.querySelector(".modal-enter"),inputLogin=document.querySelector("#email"),inputPassword=document.querySelector("#password"),formLogin=document.querySelector(".form-enter"),storage=localStorage.getItem("login");buttonLogin.addEventListener("mouseover",function(a){a.preventDefault(),modalLogin.classList.add("modal-show"),storage?(inputLogin.value=storage,inputPassword.focus()):inputLogin.focus()}),buttonLogin.addEventListener("mouseout",function(a){a.preventDefault(),modalLogin.classList.remove("modal-show")}),modalLogin.addEventListener("mouseover",function(a){a.preventDefault(),modalLogin.classList.add("modal-show")}),modalLogin.addEventListener("mouseout",function(a){a.preventDefault(),modalLogin.classList.remove("modal-show")}),formLogin.addEventListener("submit",function(a){inputLogin.value&&inputPassword.value?localStorage.setItem("login",inputLogin.value):(a.preventDefault(),modalLogin.classList.remove("modal-error"),modalLogin.offsetWidth=modalLogin.offsetWidth,modalLogin.classList.add("modal-error"))});var buttonFeedback=document.querySelector(".feedback-button"),modalFeedback=document.querySelector(".modal-feedback"),sliderWrapper=document.querySelector(".slide-wrapper"),nameFeedback=document.querySelector("#feedback-name"),emailFeedback=document.querySelector("#feedback-email"),closeFeedback=document.querySelector(".close-modal"),submitFeedback=document.querySelector(".feedback-form");buttonFeedback&&(buttonFeedback.addEventListener("click",function(a){a.preventDefault(),modalFeedback.classList.add("modal-show"),sliderWrapper.classList.add("modal-feedback-back"),nameFeedback.focus()}),closeFeedback.addEventListener("click",function(a){a.preventDefault(),modalFeedback.classList.remove("modal-show"),sliderWrapper.classList.remove("modal-feedback-back"),modalFeedback.classList.remove("modal-error")}),submitFeedback.addEventListener("submit",function(a){a.preventDefault(),nameFeedback.value&&Feedback.value||(modalFeedback.classList.remove("modal-error"),modalFeedback.offsetWidth=modalFeedback.offsetWidth,modalFeedback.classList.add("modal-error"))}));var buttonCart=document.querySelector(".modal-item-cart"),modalCart=document.querySelector(".cart-box");buttonCart&&(buttonCart.addEventListener("mouseover",function(a){a.preventDefault(),modalCart.classList.add("modal-show")}),buttonCart.addEventListener("mouseout",function(a){a.preventDefault(),modalCart.classList.remove("modal-show")}),modalCart.addEventListener("mouseover",function(a){a.preventDefault(),modalCart.classList.add("modal-show")}),modalCart.addEventListener("mouseout",function(a){a.preventDefault(),modalCart.classList.remove("modal-show")})),window.addEventListener("keydown",function(a){27===a.keyCode&&(modalSearch.classList.contains("modal-show")?modalSearch.classList.remove("modal-show"):modalLogin.classList.contains("modal-show")?(modalLogin.classList.remove("modal-show"),modalLogin.classList.remove("modal-error")):modalFeedback.classList.contains("modal-show")&&(modalFeedback.classList.remove("modal-show"),sliderWrapper.classList.remove("modal-feedback-back"),modalFeedback.classList.remove("modal-error")))});