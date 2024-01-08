
let newTarea = document.querySelector(".input")
let newBoton = document.querySelector(".boton-agregar")
let agregado = document.querySelector(".containerS")
let alerta = document.querySelector(".alert")

class Item {
    constructor(nuevaTarea){
            this.crearDiv(nuevaTarea)
    }

    crearDiv(nuevaTarea){
        let inputItem = document.createElement("input")
        inputItem.type = "text"
        inputItem.disabled = true
        inputItem.classList.add("item-input")
        inputItem.value = nuevaTarea


        let inputDiv = document.createElement("div")
        inputDiv.classList.add("item")
        inputDiv.appendChild(inputItem)

        let botonEditar = document.createElement("button")
        botonEditar.innerHTML = ` <i class="fa-solid fa-lock"></i>`
        botonEditar.classList.add("boton-editar")
        inputDiv.appendChild(botonEditar)

        let botonRemover = document.createElement("button")
        botonRemover.innerHTML = ` <i class="fa-solid fa-trash"></i>`
        botonRemover.classList.add("boton-remover")
        inputDiv.appendChild(botonRemover)
        
        agregado.appendChild(inputDiv)
    
        botonEditar.addEventListener("click", function () {
            if (inputItem.disabled == true) {
                inputItem.disabled = false
                inputItem.setAttribute("id", "editando")
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>"
            } else if (inputItem.disabled == false){
                inputItem.disabled = true
                inputItem.removeAttribute("id", "editando")
                botonEditar.innerHTML = ` <i class="fa-solid fa-lock"></i>`
            }
        })

        botonRemover.addEventListener("click", function () {
            agregado.removeChild(inputDiv)
        })
    }

}



function chequearInput() {
    if (newTarea.value == "") {
        alerta.style.visibility = "visible"
    } else {
        new Item(newTarea.value)
        newTarea.value = ""
        alerta.style.visibility = "hidden"
    }
}

newTarea.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        chequearInput()
    }
})

newBoton.addEventListener("click", function () {
    chequearInput()
})

