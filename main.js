(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){var o=e.data,i=e.handleCardClick,a=e.handleLikeClick,s=e.handleRemoveClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=o.name,this._link=o.link,this._templateSelector=n,this._handleCardClick=i,this._handleLikeClick=a,this._handleRemoveClick=s,this._userId=r,this._likes=o.likes,this._id=o.id}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementPhoto=this._element.querySelector(".element__photo"),this._elementLike=this._element.querySelector(".element__like"),this._setEventListeners(),this._element.querySelector(".element__title").textContent=this._name,this._elementPhoto.src=this._link,this._elementPhoto.alt=this._name,this._likeCounter=this._element.querySelector(".element__like-count"),this.countLike(this._likes),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._elementLike.addEventListener("click",(function(){e._handleLikeClick()})),this._element.querySelector(".element__delete").addEventListener("click",(function(){e._handleRemoveClick()})),this._elementPhoto.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"setLike",value:function(){this._elementLike.classList.add(".element__like_active")}},{key:"removeLike",value:function(){this._elementLike.classList.remove(".element__like_active")}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"countLike",value:function(e){this._likes=e,this._likeCounter.textContent=this._likes,this.checkUserLike?this.setLike():this.removeLike()}},{key:"checkUserLike",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._UserId}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._inputErrorClass=t.inputErrorClass,this._inactiveButtonClass=t.inactiveButtonClass,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._formSelector=t.formSelector,this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.setAttribute("disabled",""),this._buttonElement.classList.add(this._inactiveButtonClass)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=t,this._closeButton=this._popup.querySelector(".popup__close")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=l(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},c.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._popupPhoto=t,r._popupTitle=n,r}return t=a,(n=[{key:"open",value:function(e,t){this._popupPhoto.src=t,this._popupPhoto.alt=e,this._popupTitle.textContent=e,c(p(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._form=t._popup.querySelector(".form"),t._inputList=t._form.querySelectorAll(".form__input"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;_(k(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){_(k(a.prototype),"close",this).call(this),this._form.reset()}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=document.querySelector(n),this._renderedItems=r}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n=t.name,r=t.about,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileActivity=document.querySelector(r),this._profileAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfo={},this._userInfo.name=this._profileName.textContent,this._userInfo.about=this._profileActivity.textContent,this._userInfo}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.name,this._profileActivity.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._profileAvatar.src=e.avatar}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_serverСorrectness",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._serverСorrectness)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._serverСorrectness)}},{key:"editProfile",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.job})}).then(this._serverСorrectness)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._serverСorrectness)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._serverСorrectness)}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._serverСorrectness)}},{key:"deleteLike",value:function(){return fetch("".concat(this._baseUrl,"/cards/").concat(cardId,"/likes"),{method:"DELETE",headers:this._headers}).then(this._serverСorrectness)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._serverСorrectness)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),j=document.querySelector(".popup_type_edit-profile"),P=document.querySelector(".popup_type_add-card"),I=document.querySelector(".popup_type_photo"),q=document.querySelector(".form__input_field_name"),T=document.querySelector(".form__input_field_activity"),U=document.querySelector(".profile__edit-button"),A=document.querySelector(".profile__add-button"),R=document.querySelector(".popup__photo"),x=document.querySelector(".popup__title"),B={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__save",inactiveButtonClass:"form__save_disabled",inputErrorClass:"form__input_type_error"};function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var D=null,N=new O({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-49",headers:{authorization:"aa0e6b89-9ade-4bd3-831f-2c58dd712b31","Content-Type":"application/json"}});Promise.all([N.getUserInfo(),N.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];K.setUserInfo(o),K.setUserAvatar(o),D=o._id,console.log(o),console.log(i),G.renderItems(i)})).catch((function(e){console.log(e)}));var F=new r(B,P),J=new r(B,j);F.enableValidation(),J.enableValidation();var z=function(e){var n=new t({data:e,handleCardClick:function(e,t){H.open(e,t)},handleLikeClick:function(){n.checkUserLike()?N.deleteLike(n._id).then((function(e){n.deleteLike(),n.countLike(e.likes)})).catch((function(e){console.log(e)})):N.putLike(n._id).then((function(e){n.setLike(),n.countLike(e.likes)})).catch((function(e){console.log(e)}))}},".template-element",D);return n.generateCard()},G=new E({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){G.addItem(z(e))}},".elements");G.renderItems();var H=new h(I,R,x);H.setEventListeners();var M=new g({popupSelector:j,handleFormSubmit:function(e){K.setUserInfo(e)}});M.setEventListeners();var $=new g({popupSelector:P,handleFormSubmit:function(e){G.addItem(z(e))}});$.setEventListeners();var K=new L({name:".profile__name",about:".profile__activity",avatar:".profile__avatar"});U.addEventListener("click",(function(){var e=K.getUserInfo(),t=e.name,n=e.about;q.value=t,T.value=n,M.open()})),A.addEventListener("click",(function(){F.toggleButtonState(),$.open()}))})();