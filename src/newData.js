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
let Data = [{}]


function nome() {
  let rng = getRandomFromBucket()
  let firstName = Verbos[rng]
  let secondName = Adjetivos[rng]
  return (
    `${firstName} ${secondName}`
  )
}

function preco() {
  return ( 
    13
    )
}

function arrayGen(i) {
  let nomeCompleto = nome()
  function preco() {
    let nomeArray = nomeCompleto.split(/\s+/)
    let nomeAdj = nomeArray[nomeArray.length]
    const custo = 10 + +nomeArray.length * ((500 - +nomeArray.length) / (3 - +nomeArray.length) )
    return ( custo )
  }
  return (
    {
      id: i,
      nomeCompleto: nomeCompleto,
      valor: preco(),
      isFavorite: false,
    }
  )
}

const DataValor = [{}]

//atribuidor de valor à array
for (var i=1; i<=12; i++) {
  let object = arrayGen(i)
  DataValor.push(object)
}

console.log(DataValor)