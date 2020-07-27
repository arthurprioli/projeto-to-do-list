function adicionarItem(){
    const lista = document.querySelector('div')
    const fazer = document.createElement('input')
    const feito = document.createElement('input')
    const confirmar = document.createElement('input')
    confirmar.type = "button"
    feito.type = "checkbox"
    lista.appendChild(feito)
    lista.appendChild(fazer)
    lista.appendChild(confirmar)
    lista.innerHTML += '</br>'
}

function removerItem(){}

function modificarItem(){}

adicionarItem()
