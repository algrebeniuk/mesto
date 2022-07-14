//объявления переменных
let popup = document.querySelector('.popup');
let popupEditProfile = document.querySelector('.popup_type_edit-profile');
let popupAddCard = document.querySelector('.popup_type_add-card');
let popupOpenPhoto = document.querySelector('.popup_type_photo');

let closeButtonEditProfile = document.querySelector('.form__close_type_edit-profile');
let closeButtonAddCard = document.querySelector('.form__close_type_add-card');
let closeButtonPhoto = document.querySelector('.form__close_type_photo');
let formEditProfile = document.querySelector('.form_type_edit-profile');
let formAddCard = document.querySelector('.form_type_add-card');
let nameInput = document.querySelector('.form__input_field_name');
let jobInput = document.querySelector('.form__input_field_activity'); 

let editButton = document.querySelector('.profile__edit-button');
let likeButton = document.querySelector('.element__like');
let addButton = document.querySelector('.profile__add-button');

let profileName = document.querySelector('.profile__name');
let profileActivity = document.querySelector('.profile__activity');

let elementTemplate = document.querySelector('#template-element').content;
let elementsList = document.querySelector('.elements');

let popupPhoto = document.querySelector('.popup__photo');
let popupTitle = document.querySelector('.popup__title')

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

//функции

function openPopup(popupItem) {
    popupItem.classList.add('popup_opened');
}

function closePopup(popupItem) {
    popupItem.classList.remove('popup_opened');
}

function editFormSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileActivity.textContent = jobInput.value;
    closePopup(popupEditProfile);
}

const renderCard = () => {
    initialCards.forEach(createCard);
}

const createCard = (cardItem) =>{
    const newCard = elementTemplate.cloneNode(true);

    newCard.querySelector('.element__title').textContent = cardItem.name;
    newCard.querySelector('.element__photo').src = cardItem.link;
    newCard.querySelector('.element__photo').alt = cardItem.name;
    dataTransmissionCard(newCard);
    deleteCard(newCard);
    like(newCard);
    elementsList.prepend(newCard);
  };
  
  formAddCard.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const placeInput = popupAddCard.querySelector('.form__input_field_place');
    const linkInput = popupAddCard.querySelector('.form__input_field_link');
    const addNewCard = {
        name: placeInput.value,
        link: linkInput.value
    };
    createCard(addNewCard);
    closePopup(popupAddCard);
  });

  function like (newCard) {
    newCard.querySelector('.element__like').addEventListener('click', (evt) => {
        evt.target.classList.toggle('element__like_active');
    });
  };

  function deleteCard (newCard) {
    newCard.querySelector('.element__delete').addEventListener('click', (evt) => {
        evt.target.closest('.element').remove();
    });
  };

  function dataTransmissionCard (newCard) {
    newCard.querySelector('.element__photo').addEventListener('click', (evt) => {
        openPopup(popupOpenPhoto);
        popupPhoto.src = evt.target.src  
        popupPhoto.alt = evt.target.alt
        popupTitle.textContent = evt.target.closest('.element').querySelector('.element__title').textContent
    });
  }  
  
//события

editButton.addEventListener('click', () => {
    openPopup(popupEditProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileActivity.textContent;
});

addButton.addEventListener('click', () => {
    openPopup(popupAddCard);
})

closeButtonEditProfile.addEventListener('click', () => {
    closePopup(popupEditProfile);
})    

closeButtonAddCard.addEventListener('click', () => {
    closePopup(popupAddCard);
})    

formEditProfile.addEventListener('submit', editFormSubmitHandler);

renderCard();

closeButtonPhoto.addEventListener('click', () => {
    closePopup(popupOpenPhoto);
})





