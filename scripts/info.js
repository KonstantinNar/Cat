class Info {
    constructor() {
        this._info = document.querySelector('.info')
        this._escape = this._escape.bind(this)
        this._text = document.querySelector('.text')
    }

    setCat(e) {
        for (let key in e) {
            let elem = document.querySelector(`.text__content-${key}`)
            if (key !== "favorite") {
                if (key !== "image") {
                    elem.innerText = e[key]
                } else {
                    elem.src = e[key]
                }
            } else {
                if (!e[key]) {
                    elem.style.color = 'var(--text-light-color)'
                } else {
                    elem.style.color = "red"
                }
            }
        }
    }

    delete(id) {
        let btnDelete = document.querySelector('#delete')
        btnDelete.addEventListener('click', () => {
            api.deleteCatById(id).then(() => {
                const elem = document.getElementById(id)
                elem.parentNode.parentNode.remove();
            })
            localStorage.removeItem(id)
            this.close();
        })

    }

    like(id) {
        let btnLike = document.querySelector('#like')
        let elem = document.getElementById(id)
        btnLike.addEventListener('click', (e) => {
            console.log(e);
            if (elem.parentNode.nextElementSibling.className === "card__like") {
                api.updateCatById(id, { favorite: false }).then((data) => {
                    btnLike.style.color = "var(--text-light-color)"
                })
            } else {
                api.updateCatById(id, { favorite: true }).then((data) => {
                    btnLike.style.color = "red"
                })
            }
        }, {
            once: true,
        })
    }

    _escape(event) {
        if (event.key == "Escape") {
            this.close()
        }
    }

    open() {
        this._info.classList.add('info__active')
        document.body.style.overflow = "hidden"
        document.addEventListener("keyup", this._escape)
    }

    close() {
        this._info.classList.remove('info__active')
        document.body.style.overflow = "visible"
        document.removeEventListener("keyup", this._escape)
    }

    setTet() {
        this._info.addEventListener("click", (event) => {
            if (event.target.classList.contains("info") || event.target.closest(".info__close")) {
                this.close()
            }
        })

        addEventListener('click', (event) => {
            if (event.target.className === "card__name") {
                this.open()
                api.getCatById(event.target.id).then((data) => {
                    this.setCat(data)
                })
                this.like(event.target.id)
                this.delete(event.target.id)
            }
        })
    }
}

let info = new Info()
info.setTet()