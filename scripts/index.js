let EditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let CloseButton = document.querySelector('.form__close');
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__name');  //form.elements.name
let jobInput = document.querySelector('.form__activity'); 
let profileName = document.querySelector('.profile__name');
let profileActivity = document.querySelector('.profile__activity');

function openPopup(event) {
    event.preventDefault();
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

EditButton.addEventListener('click', openPopup);
CloseButton.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileActivity.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
