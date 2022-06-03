var bucket = [];

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


const DataPromo =[{
  id: 1,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length)
},{
  id: 2,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length)
},{
  id: 3,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length)
},{
  id: 4,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length)
},{
  id: 5,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length)
},{
  id: 6,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length)
},{
  id: 7,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length)
},{
  id: 8,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length)
},{
  id: 9,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length)
},{
  id: 10,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length)
},{
  id: 11,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length)
},{
  id: 12,
  firstName: Verbos[getRandomFromBucket()],
  secondName: Adjetivos[getRandomFromBucket()],
  value: 10 + 2 * (500 - Adjetivos[getRandomFromBucket()].length)
}
]


export default DataPromo