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
            }
        })
    }
}

let info = new Info()
info.setTet()