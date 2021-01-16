(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e,this._link=n,this._templateSelector=r,this._handleCardClick=o}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__img"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".card__title").textContent=this._name,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".card__like-button").addEventListener("click",this._handleLikeButton),this._element.querySelector(".card__bin-button").addEventListener("click",this._handleBinButton),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._link,e._name)}))}},{key:"_handleLikeButton",value:function(e){e.target.classList.toggle("card__like-button_active")}},{key:"_handleBinButton",value:function(e){var t=e.target.closest(".card");t&&t.remove()}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"rendererItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&document.querySelector(".popup_opened").classList.remove("popup_opened")}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&o(t.prototype,n),e}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"open",value:function(e,t){a(p(u.prototype),"open",this).call(this);var n=document.querySelector("#bigger-img"),r=n.querySelector(".popup__img"),o=n.querySelector(".popup__img-title");r.src=e,o.textContent=t}}])&&c(t.prototype,n),u}(i);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=t,n}return t=u,(n=[{key:"close",value:function(){d(v(u.prototype),"close",this).call(this),this._submitButton.reset()}},{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popup.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;d(v(u.prototype),"setEventListeners",this).call(this),this._submitButton=this._popup.querySelector(".popup__container"),this._submitButton.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}}])&&y(t.prototype,n),u}(i);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t){var n=t.name,r=t.profession;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._profession=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name,profession:this._profession}}},{key:"setUserInfo",value:function(){var e=document.querySelector(".profile__name"),t=document.querySelector(".profile__profession"),n=document.querySelector(".popup__input_type_name"),r=document.querySelector(".popup__input_type_profession");e.textContent=n.value,t.textContent=r.value}}])&&S(t.prototype,n),e}(),k={formSelector:".popup__container",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__error_visible"};function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._element=n}var t,n;return t=e,(n=[{key:"_showError",value:function(e){this._element.querySelector("#".concat(e.id,"-error")).textContent=e.validationMessage,e.classList.add(this._inputErrorClass)}},{key:"_hideError",value:function(e){this._element.querySelector("#".concat(e.id,"-error")).textContent="",e.classList.remove(this._inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_setButtonState",value:function(e,t){t?(e.classList.remove(this._inactiveButtonClass),e.disabled=!1):(e.classList.add(this._inactiveButtonClass),e.disabled=!0)}},{key:"_setEventListeners",value:function(){var e=this,t=Array.from(this._element.querySelectorAll(this._inputSelector)),n=this._element.querySelector(this._submitButtonSelector);t.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._setButtonState(n,e._element.checkValidity())}))}))}},{key:"enableValidation",value:function(){var e=this;document.querySelectorAll(this._formSelector).forEach((function(t){e._setEventListeners(),t.addEventListener("submit",(function(e){e.preventDefault()}));var n=t.querySelector(e._submitButtonSelector);e._setButtonState(n,t.checkValidity())}))}}])&&E(t.prototype,n),e}(),C=document.querySelector(".gallery-grid"),q=new w(k,document.querySelector("#placeContainer")),L=document.querySelector("#profileContainer"),O=new w(k,L),j=document.querySelector(".profile__edit-button"),B=(document.querySelector("#profileCloseButton"),document.querySelector("#profile")),P=document.querySelector(".profile__name"),x=document.querySelector(".profile__profession"),R=(document.querySelector(".popup__input_type_name"),document.querySelector(".popup__input_type_profession"),document.querySelector(".profile__add-button")),I=(document.querySelector("#placeCloseButton"),document.querySelector("#placeContainer")),V=document.querySelector("#place"),T=document.querySelector(".popup__input_type_place"),D=document.querySelector(".popup__input_type_link"),A=document.querySelector("#bigger-img"),U=(A.querySelector(".popup__img"),A.querySelector(".popup__img-title"),document.querySelectorAll(".popup"),new b(B));U.setEventListeners();var F=new b(V);F.setEventListeners();var z=new r({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var n=new t(e.name,e.link,"#card",M).generateCard();z.addItem(n)}},".gallery-grid");function M(e,t){var n=new f(A);n.open(e,t),n.setEventListeners()}z.rendererItems();var N=new g({name:P.textContent,profession:x.textContent});j.addEventListener("click",(function(){U.open()})),L.addEventListener("submit",(function(e){e.preventDefault(),N.setUserInfo(),U.close()})),R.addEventListener("click",(function(){F.open()})),I.addEventListener("submit",(function(e){e.preventDefault();var t=createCard({name:T.value,link:D.value});!function(e,t){e.prepend(t),T.value="",D.value=""}(C,t),F.close()})),q.enableValidation(),O.enableValidation()})();