class Popup {
    constructor(addClass) {
        this._addClass = addClass;
        this._openPopup = document.querySelector('.header__btn')
        this.popup = document.querySelector(`.${addClass}`);
        this._escape = this._escape.bind(this)
    }

    _escape(event) {
        if (event.key == "Escape") {
            this.close()
        }
    }

    open() {
        this.popup.classList.add('popup__active');
        document.body.style.overflow = "hidden"
        document.addEventListener("keyup", this._escape)
    }

    close() {
        this.popup.classList.remove('popup__active');
        document.body.style.overflow = "visible"
        document.removeEventListener("keyup", this._escape)
    }

    setEvent() {
        this.popup.addEventListener('click', (event) => {
            if (event.target.classList.contains(this._addClass) || event.target.closest(".popup__btn")) {
                this.close()
            }
        })
        this._openPopup.addEventListener('click', () => {
            this.open()
        })
    }
}
