const app = document.getElementById("app")
const campo = document.getElementById("numero")
campo.addEventListener("keyup", (event) => {
    const numero = Number(event.target.value)
    do {
        console.log("númeor inválido")
    } while (numero < 0)
    while (false)

    while (true) {
        if (numero % 2 == 0) {
            break
        }
        console.log(numero)
        if (numero > 678) {
            break
        }
    }


    // while (true) {
    //     numero++
    //     console.log(numero)
    // }
})
const nomes = ["maria", "augusto", "mateus", "neymar"]
const idades = [12, 21, 24, 34, 43, 56, 48, 57, 78, 23]
let numero = 100
