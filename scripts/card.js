class Cats {
    constructor(dataCat, setTemplate) {
        this._dataCat = dataCat;
        this._setTemplate = setTemplate
    }

    _getTemplate() {
        return document.querySelector(this._setTemplate).content.querySelector(".card")
    }

    getElement() {
        this.element = this._getTemplate().cloneNode(true)

        let cardImg = this.element.querySelector(".card__img")
        let cardName = this.element.querySelector(".card__name")
        let cardLike = this.element.querySelector(".card__like")

        cardImg.src = this._dataCat.image
        cardName.innerText = this._dataCat.name
        if (!this._dataCat.favorite) {
            cardLike.remove()
        }

        return this.element
    }

}

let newCat = new Cats(cats[0], ".main__tamplate")