import Popup from "./Popup.js"; 

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.form');  
        this._submitButton = this._form.querySelector('.form__save');
        this._inputList = this._form.querySelectorAll('.form__input');
    }

    _getInputValues() { 
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        })

        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            
        });
    }

    close() {
        super.close();
        this._form.reset()
    }

    isLoadingMessage(isLoading) {
        if(isLoading) {
            this._submitButton.textContent = 'Сохранение...';
        } else {
            this._submitButton.textContent = 'Сохранить';
        }
    } 
}