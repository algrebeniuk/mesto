//объявления переменных
const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupOpenPhoto = document.querySelector('.popup_type_photo');

const closeButton = document.querySelectorAll('.form__close');
const closeButtonEditProfile = document.querySelector('.form__close_type_edit-profile');
const closeButtonAddCard = document.querySelector('.form__close_type_add-card');
const closeButtonPhoto = document.querySelector('.form__close_type_photo');
const formEditProfile = document.querySelector('.form_type_edit-profile');
const formAddCard = document.querySelector('.form_type_add-card');
const nameInput = document.querySelector('.form__input_field_name');
const jobInput = document.querySelector('.form__input_field_activity'); 
const placeInput = popupAddCard.querySelector('.form__input_field_place');
const linkInput = popupAddCard.querySelector('.form__input_field_link');

const editButton = document.querySelector('.profile__edit-button');
const likeButton = document.querySelector('.element__like');
const addButton = document.querySelector('.profile__add-button');

const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');

const elementTemplate = document.querySelector('#template-element').content;
const elementsList = document.querySelector('.elements');

const popupPhoto = document.querySelector('.popup__photo');
const popupTitle = document.querySelector('.popup__title')

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

const renderInitialCards = (cardItem) => {
    elementsList.prepend(cardItem);
}

const renderCard = (cardItem) => {
    initialCards.forEach(function (cardItem) {
        const createAllCards = createCard(cardItem);
        renderInitialCards(createAllCards);
    });
}


const createCard = (cardItem) =>{
    const newCard = elementTemplate.cloneNode(true);
    newCard.querySelector('.element__title').textContent = cardItem.name;
    newCard.querySelector('.element__photo').src = cardItem.link;
    newCard.querySelector('.element__photo').alt = cardItem.name;
    dataTransmissionCard(newCard);
    deleteCard(newCard);
    like(newCard);
    return newCard;
  };

  formAddCard.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const addNewCard = {
        name: placeInput.value,
        link: linkInput.value
    };
    createCard(addNewCard);
    closePopup(popupAddCard);
    formAddCard.reset();
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

formEditProfile.addEventListener('submit', editFormSubmitHandler);

renderCard();


/*closeButtonPhoto.addEventListener('click', () => {
    closePopup(popupOpenPhoto);
})

closeButtonEditProfile.addEventListener('click', () => {
    closePopup(popupEditProfile);
})   

closeButtonAddCard.addEventListener('click', () => {
    closePopup(popupAddCard);
}) */

closeButton.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});





