let arr = [
  {id: 2, nomeCompleto: 'Raquete otário', valor: 998, isFavorite: false},
  {id: 10, nomeCompleto: 'Hidroavião Natural', valor: 996, isFavorite: false},
  {id: 3, nomeCompleto: 'Canga melhor', valor: 998, isFavorite: false},
  {id: 3, nomeCompleto: 'Canga melhor', valor: 998, isFavorite: false},
  {id: 3, nomeCompleto: 'Canga melhor', valor: 998, isFavorite: false},
  {id: 4, nomeCompleto: 'Espanador injusto', valor: 996, isFavorite: false},
  {id: 5, nomeCompleto: 'Moeda orgulhoso', valor: 992, isFavorite: false},
  {id: 5, nomeCompleto: 'Moeda orgulhoso', valor: 992, isFavorite: false},
  {id: 6, nomeCompleto: 'Helióstato zeloso', valor: 998, isFavorite: false},
  {id: 7, nomeCompleto: 'Caneca feio', valor: 1002, isFavorite: false},
  {id: 8, nomeCompleto: 'Sintetizador empenhado', valor: 992, isFavorite: false},
  {id: 8, nomeCompleto: 'Sintetizador empenhado', valor: 992, isFavorite: false},
  {id: 8, nomeCompleto: 'Sintetizador empenhado', valor: 992, isFavorite: false},
  {id: 8, nomeCompleto: 'Sintetizador empenhado', valor: 992, isFavorite: false},
  {id: 5, nomeCompleto: 'Moeda orgulhoso', valor: 992, isFavorite: false},
  {id: 9, nomeCompleto: 'Foguete faceiro', valor: 996, isFavorite: false},
  {id: 10, nomeCompleto: 'Hidroavião Natural', valor: 996, isFavorite: false},
  {id: 11, nomeCompleto: 'Rolo horroroso', valor: 992, isFavorite: false},
  {id: 12, nomeCompleto: 'Bucha inteligente', valor: 988, isFavorite: false},
]

let sorted_arr = arr.slice().sort((a, b) => {
  return a.id - b.id
})



console.log(sorted_arr)