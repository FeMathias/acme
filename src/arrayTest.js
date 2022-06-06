










let soma = [
  {nome: 'Vareta de freio windsurfista', value: -1942, id: 3, quantity: 1},
  {nome: 'Maquete lutador', value: 996, id: 13, quantity: 1},
  {nome: 'Interfone desejado', value: 994, id: 14, quantity: 3},
  {nome: 'Foguete faceiro', value: 996, id: 29, quantity: 1},
]


let total = 0

soma.forEach (element => {
  total += (element.value * element.quantity)
})

console.log(total)