import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  popupEditProfile,
  popupAddCard,
  popupOpenPhoto,
  nameInput,
  jobInput,
  editButton,
  addButton,
  validationConfig,
  initialCards,
  popupPhoto,
  popupTitle
} from '../utils/constants.js';

const cardFormValidator = new FormValidator(validationConfig, popupAddCard);
const profileFormValidator = new FormValidator(validationConfig, popupEditProfile);

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();


const createCard = (data) => {
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

const popupWithImage = new PopupWithImage
  (
    popupOpenPhoto, 
    popupPhoto, 
    popupTitle,
  );
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