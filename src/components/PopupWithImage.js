import Popup from "./Popup.js"; 

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(name, link) {
        this._popupPhoto = this._popup.querySelector('.popup__photo');
        this._popupTitle = this._popup.querySelector('.popup__title');
        this._popupPhoto.src = link;  
        this._popupPhoto.alt = name;
        this._popupTitle.textContent = name;
        super.open();
    }
}