import './index.css';
import Card from "../components/Cards.js"
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupOpenPhoto = document.querySelector('.popup_type_photo');

const nameInput = document.querySelector('.form__input_field_name');
const jobInput = document.querySelector('.form__input_field_activity'); 

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save',
  inactiveButtonClass: 'form__save_disabled',
  inputErrorClass: 'form__input_type_error',
}


const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const cardFormValidator = new FormValidator(validationConfig, popupAddCard);
const profileFormValidator = new FormValidator(validationConfig, popupEditProfile);

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();


const createCard = ( data) => {
    const card = new Card({
      data: data,
      handleCardClick: (name, link) => {
        popupWithImage.open(name, link);
      }, 
    },
    '.template-element',
    );
    const cardElement = card.generateCard();
    
    return cardElement;
}

const elementsList = new Section(
  {
    items: initialCards,
    renderer: (card) => {
      elementsList.addItem(createCard(card))
    }
  }, 
  '.elements'
);

elementsList.renderItems();

const popupWithImage = new PopupWithImage(popupOpenPhoto);
popupWithImage.setEventListeners();

const popupWithFormEditProfile = new PopupWithForm({
  popupSelector: popupEditProfile,
  handleFormSubmit: (item) => {
    userInfo.setUserInfo (item)
  }
})

popupWithFormEditProfile.setEventListeners();

const popupWithFormAddCard = new PopupWithForm({
  popupSelector: popupAddCard,
  handleFormSubmit: (card) => {
    elementsList.addItem(createCard(card))
  }
})

popupWithFormAddCard.setEventListeners();

const userInfo = new UserInfo({
  name: '.profile__name',
  activity: '.profile__activity'
})

editButton.addEventListener('click', () => {
  const {name, activity} = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = activity;
  popupWithFormEditProfile.open();
});

addButton.addEventListener('click', () => {
  cardFormValidator.toggleButtonState();
  popupWithFormAddCard.open();
})