let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.form__close');
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__input_field_name');
let jobInput = document.querySelector('.form__input_field_activity'); 
let profileName = document.querySelector('.profile__name');
let profileActivity = document.querySelector('.profile__activity');

function openPopup(event) {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileActivity.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileActivity.textContent = jobInput.value;
    closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
