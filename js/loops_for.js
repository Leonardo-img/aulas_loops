const app = document.getElementById("app")
const nomes = ["maria", "augusto", "mateus", "neymar"]
const idades = [12, 21, 24, 34, 43, 56, 48, 57,  78, 23]
const ul = document.createElement("ul")
const tamanho = nomes.length - 1
// for(let i=0; i<=tamanho; i++){
//     const lista = document.createElement("li")
//     lista.innerText = nomes[i]
//     ul.appendChild(lista)
// }
// for of
// for (const pos in nomes) {
//     const lista = document.createElement("li")
//     lista.innerText = nomes[pos]
//     ul.appendChild(lista)
// }
for (const idade of idades) {
    if(idade >99 ){
        break
    } if( idade % 2== 0){
        continue
    }
    const lista = document.createElement("li")
    lista.innerText = idade
    
    ul.appendChild(lista)
   
}
app.appendChild(ul)