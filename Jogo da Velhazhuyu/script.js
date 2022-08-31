let tabuleiro = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
]

let jogador1 = 1
let jogador2 = 2
let empateponto = 0
let Oponto = 0
let Xponto = 0
let vitoria = false
let empate = false

let jogador = jogador1 // 1 é o X e 2 é O ?

/*const atualizaVitoria = (jogador) => {
    return vitoria.some(combinacao => {
        return combinacao.every((index) =>{
            return cell[index].classList.contains(jogador);
        })
    })
}*/

window.onload= () => {
    const x = document.getElementById("x")
    const o = document.getElementById("o") 

    x.style.opacity = (jogador === jogador1) ? 1 : 0.25 // -> se (jogador === 1) for-?- retorna -1- verdadeiro , se não-:- retorna -0.25- falso
    o.style.opacity = (jogador === jogador2) ? 1 : 0.25
}

function atualizaTabuleiro() {
    jogador = (jogador === jogador1) ? 2 : 1
    const rodada = document.getElementById("rodada")
    rodada.innerHTML = `${(jogador === 1) ? 'X' : 'O'} RODADA`

    const x = document.getElementById("x")
    const o = document.getElementById("o") 

    x.style.opacity = (jogador === jogador1) ? 1 : 0.25 // -> se (jogador === 1) for-?- retorna -1- verdadeiro , se não-:- retorna -0.25- falso
    o.style.opacity = (jogador === jogador2) ? 1 : 0.25

    for (let i = 0; i < tabuleiro.length; i++) {
        const btn = document.getElementById(`cell_${i}`)
        if (tabuleiro[i] === jogador1) {
            btn.innerHTML = "<img src='x.svg' alt='jogador X'/>"
        }
        else if (tabuleiro[i] === jogador2) {
            btn.innerHTML = "<img src='o.svg' alt='jogador O'/>"
        }
        else {
            btn.innerHTML = ""
        }

    }
    vencedor()
}

function reset() {
    tabuleiro = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ]
    jogador = jogador1
    vitoria = false
    empate = false
    atualizaTabuleiro()
}

function jogada(cell) {
    if (tabuleiro[cell] === 0){
        tabuleiro[cell] = jogador
        atualizaTabuleiro()
   }
}

function vencedor(){
    if (tabuleiro[0] !== 0 && tabuleiro[0] === tabuleiro[1] && tabuleiro[0] === tabuleiro[2]) {
        alert(`${jogador}`+' Ganhou!!!');
        vitoria = true;
    }
    else if (tabuleiro[3] !== 0 && tabuleiro[3] === tabuleiro[4] && tabuleiro[3] === tabuleiro[5]) {
        alert(`${jogador}`+' Ganhou!!!');
        vitoria = true;
    }
    else if (tabuleiro[6] !== 0 && tabuleiro[6] === tabuleiro[7] && tabuleiro[6] === tabuleiro[8]) {
        alert(`${jogador}`+' Ganhou!!!');
        vitoria = true;
    }
    else if (tabuleiro[0] !== 0 && tabuleiro[0] === tabuleiro[3] && tabuleiro[0] === tabuleiro[6]) {
        alert(`${jogador}`+' Ganhou!!!');
        vitoria = true;
    }
    else if (tabuleiro[1] !== 0 && tabuleiro[1] === tabuleiro[4] && tabuleiro[1] === tabuleiro[7]) {
        alert(`${jogador}`+' Ganhou!!!');
        vitoria = true;
    }
    else if (tabuleiro[2] !== 0 && tabuleiro[2] === tabuleiro[5] && tabuleiro[2] === tabuleiro[8]) {
        alert(`${jogador}`+' Ganhou!!!');
        vitoria = true;
    }
    else if (tabuleiro[0] !== 0 && tabuleiro[0] === tabuleiro[4] && tabuleiro[0] === tabuleiro[8]) {
        alert(`${jogador}`+' Ganhou!!!');
        vitoria = true;
    }
    else if (tabuleiro[2] !== 0 && tabuleiro[2] === tabuleiro[4] && tabuleiro[2] === tabuleiro[6]) {
        alert(`${jogador}`+' Ganhou!!!');
        vitoria = true;
    }
    else if (tabuleiro[0] && tabuleiro[1] && tabuleiro[2] && tabuleiro[3] && tabuleiro[4] && tabuleiro[5] && tabuleiro[6] && tabuleiro[7] && tabuleiro[8] !== 0 ){
        alert('Empate')
        vitoria = true;
        empate = true;
    }
    atualizaponto()
}

function atualizaponto() {
    if (vitoria == true && jogador == jogador2 && empate == false){
        Xponto += 1
    }
    else if (vitoria == true && jogador == jogador1 && empate == false){
        Oponto += 1
    }
    else if (empate == true){
        empateponto += 1
    }
    let xPoints = document.getElementById('x-ponto')
    xPoints.innerHTML = (`${Xponto}`)
    let oPoints = document.getElementById('o-ponto')
    oPoints.innerHTML = (`${Oponto}`)
    let noPoints = document.getElementById('empate-ponto')
    noPoints.innerHTML = (`${empateponto}`);
}

