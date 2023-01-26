cats.forEach((cat) => {
    const addCat = new Cats(cat, ".main__tamplate")
    let newAddCat = addCat.getElement()
    document.querySelector(".main__cards").append(newAddCat)
});

let openBtn = document.querySelector(".header__btn")
let closeBtn = document.querySelector(".popup__btn")
const popupAddCat = new Popup('popup');
openBtn.addEventListener('click', () => popupAddCat.open());
closeBtn.addEventListener('click', () => popupAddCat.close());
