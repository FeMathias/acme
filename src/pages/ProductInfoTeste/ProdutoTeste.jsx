import React from 'react'
import Produto from './Produto'
import Data from '../../Data'
import { useParams } from 'react-router-dom'

const ProdutoTeste = () => {
  let { id } = useParams()
  let DataSet = [Data[id - 2]]
  console.log(DataSet)
  let prod = DataSet.map((item, index) => {
    return (
      <Produto 
        key = {item.id}
        id = {item.id}
        nomeCompleto = {item.nomeCompleto}
        valor = {item.valor}
      />
    )
  })


  return (
    <div>{prod}</div>
  )
}

export default ProdutoTeste