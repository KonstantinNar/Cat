function createCat(znach) {
    const addCat = new Cats(znach, ".main__tamplate")
    let newAddCat = addCat.getElement()
    document.querySelector(".main__cards").append(newAddCat)
}

api.getAllCats().then((data) =>
    data.forEach((cat) => {
        createCat(cat)
    })
);

const popupAddCat = new Popup('popup');
popupAddCat.setEvent()

let form = document.querySelector('.form')
function bitForm(data) {
    let inputCat = {}
    data.forEach((input) => {
        if (input.type === "submit") return;
        if (input.type !== "checkbox") {
            inputCat[input.name] = input.value
        }
        if (input.type === "checkbox") {
            inputCat[input.name] = input.checked
        }
    })
    return inputCat
}
function getForm(event) {
    event.preventDefault();
    let elementForm = [...form.elements]
    const dataForm = bitForm(elementForm)
    api.addNewCat(dataForm)
    createCat(dataForm)
    form.reset()
    popupAddCat.close()
}
form.addEventListener('submit', getForm)