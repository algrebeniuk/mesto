export default class Card {
    constructor( {data, handleCardClick}, templateSelector ) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
      const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);

      return cardElement; 
    }

    generateCard() {
      this._element = this._getTemplate();  
      this._elementPhoto = this._element.querySelector('.element__photo');
      this._setEventListeners();
      this._element.querySelector('.element__title').textContent = this._name;
      this._elementPhoto.src= this._link;
      this._elementPhoto.alt = this._name;
  
      return this._element;
    }
    
    _setEventListeners() {
      this._element.querySelector('.element__like').addEventListener('click', (evt) => {
        this.like(evt);
      });

      this._element.querySelector('.element__delete').addEventListener('click', () => {
        this.deleteCard();
      });
      this._elementPhoto.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);  
      });
    }

    like(evt) {
      evt.target.classList.toggle('element__like_active');
    }
    
    deleteCard() { 
      this._element.remove(); 
      this._element = null; 
    } 
}





