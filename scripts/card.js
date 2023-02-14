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
        let cardDelite = this.element.querySelector(".card__btn")

        cardImg.src = this._dataCat.image
        cardName.innerText = this._dataCat.name
        cardName.id = `${this._dataCat.id}`
        if (!this._dataCat.favorite) {
            cardLike.remove()
        }
        cardDelite.id = `${this._dataCat.id}`

        let deleteBtn = this.element.querySelector(".card__btn")
        deleteBtn.addEventListener('click', (e) => {
            api.deleteCatById(this._dataCat.id).then(() => {
                const elem = document.getElementById(this._dataCat.id)
                console.log(elem.parentNode.parentNode.remove());
            })
        })

        return this.element
    }

}

// let newCat = new Cats(cats[0], ".main__tamplate")