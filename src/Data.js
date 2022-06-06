const Verbos = ["Armário", "Navio", "Mala", "Base", "Hidroavião", "Revista", "Carretel", "Minissaia", "Tamborim",
"Andador", "Geladeira", "Estátua", "Rolo", "Crachá", "Peneira", "Bafômetro", "Desentupidor",
"Guarda-chuva", "Espanador", "Escudo", "Raquete", "Vaso sanitário", "Lancheira", "Cofre",
"Helióstato", "Medalha", "Foguete", "Lata", "Sintetizador", "Grampo", "Bucha", "Catraca",
"Alfinete", "Caneca", "Fita", "Moeda", "Gel", "Maquete", "Interfone", "Gaveta", "Helicóptero",
"Vela de cera", "Quimono", "Necessaire", "Machado", "Tecido", "Vareta de freio", "Obra de arte",
"Canga"]

const Adjetivos = ["prepotente", "valioso", "legítimo", "desleixado", "Natural", "inteligente", "disciplinado",
"louvável", "amargurado", "honesto", "odioso", "vergonhoso", "horroroso", "magnífico", "gordo",
"romântico", "sublime", "mesquinho", "injusto", "medroso", "otário", "quente", "intenso", "Sábio",
"zeloso", "desapegado", "faceiro", "companheiro", "empenhado", "espantoso", "traidor",
"perfeccionista", "Qualificado", "feio", "tolerante", "orgulhoso", "ignorante", "lutador", "desejado",
"exigente", "nostálgico", "próspero", "compreensivo", "excelente", "estourado", "malvado",
"windsurfista", "falso", "melhor", "terno"]

var bucket = [];

for (var i=0;i<=49;i++) {
    bucket.push(i);
}

function getRandomFromBucket() {
   var randomIndex = Math.floor(Math.random()*bucket.length);
   return bucket.splice(randomIndex, 1)[0];
}

//primeira array, sem valor
let Data = []


function nome() {
  let rng = getRandomFromBucket()
  let firstName = Verbos[rng]
  let secondName = Adjetivos[rng]
    if (firstName && secondName !== undefined ) {
      return (`${firstName} ${secondName}`)} else {
        return (`${Verbos[Math.floor(Math.random()* (50 - 1) + 1)]} ${Adjetivos[Math.floor(Math.random()* (49 - 1) + 1)]}`)
      }
    }

function arrayGen(i) {
  let nomeCompleto = nome()
  function preco() {
    let nomeArray = nomeCompleto.split(/\s+/)
    let nomeAdj = nomeArray[nomeArray.length - 1]
    const custo = 10 + +nomeArray.length * ((500 - +nomeAdj.length) / (3 - +nomeArray.length) )
    return ( custo )
  }
  return (
    {
      id: i,
      nomeCompleto: nomeCompleto,
      valor: preco(),
      isFavorite: false,
      quantidade: 1
    }
  )
}


//atribuidor de valor à array
for (var index = 1; index<=36; ++index) {
  let object = arrayGen(index + 1)
  Data.push(object)
}

export default Data
console.log(Data)
