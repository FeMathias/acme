import Cards from './components/cards/Cards'

var bucket = [];
var isFavorite = Cards.setToggleCard

for (var i=1;i<=49;i++) {
    bucket.push(i);
}

function getRandomFromBucket() {
   var randomIndex = Math.floor(Math.random()*bucket.length);
   return bucket.splice(randomIndex, 1)[0];
}

console.log(getRandomFromBucket())

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

const Data = [{
  id: 21,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length),
  isFavorite: false
},{
  id:22,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length),
  isFavorite: false
},{
  id: 23,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length),
  isFavorite: false
},{
  id: 24,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length),
  isFavorite: false
},{
  id: 25,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length),
  isFavorite: false
},{
  id: 26,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length),
  isFavorite: false
},{
  id: 27,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length),
  isFavorite: false
},{
  id: 28,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length),
  isFavorite: false
},{
  id: 29,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length),
  isFavorite: false
},{
  id: 31,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length),
  isFavorite: false
},{
  id: 32,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length),
  isFavorite: false
},{
  id: 33,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length),
  isFavorite: false
},
]

export default Data