const hoje = new Date()
const anoAtual = hoje.getFullYear()
    
//CALCULAR OS ANOS
function calcularAnos() {
    const input = document.getElementById('data-input').value                   //PEGANDO O VALOR DE INPUT

    if (input === "") {                                                         //verificando se o input esta vazio
        alert('Digite uma data')
        return null
    }

    const data = new Date(input)                                                // estou convertendo o input para formato de data
    const anoNascimento = data.getFullYear()                                    // pegando apenas o ano

    if (anoNascimento > anoAtual) {                                             //verificando se o ano e maior que o ano atual
        alert(`Digite um ano de ${anoAtual} ou menor`)
        return null
    }

    const idade = anoAtual - anoNascimento                                      //calculo da idade e retorna a idade calculada
    return idade                                    
}


//CALCULAR FAIXA ETARIA
function faixaEtaria() { 
    var idade = calcularAnos();

    if (idade < 16 ) {
        return 'crianca'
    } else if (idade <= 18){
        return 'adolescente'
    } else if (idade < 65) {
        return 'adulto'
    } else {
        return 'idoso'
    }

}

//VERIFICAR O SEXO
function sexo() {
    const genero = document.querySelector('input[name="genero"]:checked')

    if (genero == null) {                                                       // verificando se foi selecionado o sexo
        alert('Por favor selecione o o genero')                                 // se esta vazio/null aparece o alert
        return null
    }
    
    const checkedGen = genero.value                                             //pego o value

    if (checkedGen == "male") {                                                 //checo se o value e male ou female
        return 'Homem'
    } else {
        return 'Mulher'
    }
}

// VERIFICAR FAIXA ETARIA E GENERO
function verificarGenero() {
    const etaria = faixaEtaria()
    const genero = sexo()

    if (etaria === 'crianca') {
        if (genero == 'Homem') {
            return 'menino'
        } else {
            return 'menina'
        }
    } else if (etaria === 'adolescente'){
        if (genero == 'Homem') {
            return 'menino adolescente'
        } else {
            return 'menina adolescente'
        }
    } else if (etaria === 'adulto'){
        if (genero == 'Homem') {
            return 'homem'
        } else {
            return 'mulher'
        }
    } else if (etaria === 'idoso') {
        if (genero == 'Homem') {
            return 'idoso'
        } else {
            return 'idosa'
        }
    }
}

//Verificar o genero e mostra um imagem com base no genero e faixa etaria
function mostrarImg() {
    const genero = verificarGenero()
    let imgSrc

    if (genero == 'menino') {
        imgSrc = './images/menino.jpg'           
    } else if (genero == 'menina') {
        imgSrc = './images/menina.jpg' 
    } else if (genero == 'menino adolescente') {
        imgSrc = './images/adolescente menino.jpg' 
    } else if (genero == 'menina adolescente') {
        imgSrc = './images/adolescente menina.jpg'  
    } else if (genero == 'homem') {
        imgSrc = './images/homem.jpg' 
    } else if (genero == 'mulher') {
        imgSrc = './images/mulher.jpg'    
    } else if(genero == 'idoso'){
        imgSrc = './images/idoso.jpg' 
    } else if (genero == 'idosa') {
        imgSrc = './images/idosa.jpg'   
    }

    const imgElement = document.getElementById('imagem');
    imgElement.src = imgSrc
}






function verificar() {
    const genero = sexo()
    const idade = calcularAnos()

    const divEscondida = document.getElementById('divEscondida')
    divEscondida.classList.remove('hidden')

    divEscondida.innerHTML = `
    <p>Detectamos ${genero} com ${idade} anos</p>
    <img id="imagem" src="" alt="Imagem da pessoa detectada">
    `
    mostrarImg()
}

document.getElementById('btn').addEventListener('click', verificar)