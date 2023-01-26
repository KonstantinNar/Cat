class Popup {
    constructor(addClass) {
        this._addClass = addClass;
        this.popup = document.querySelector(`.${addClass}`);
    }

    open() {
        this.popup.classList.add('popup__active');
    }

    close() {
        this.popup.classList.remove('popup__active');
    }
}
