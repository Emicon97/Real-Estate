import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardsContainer from '../../styledComponents/CardsContainer'

const ListaPropiedades: object[] = [
  {
    address: 'La perla 534',
    area: 170,
    type: 'casa',
    rooms: 2,
    status: 0,
    city: 'Buenos aires',
    bathrooms: 2,
    neighbourhood: 2,
    constructionDate: 12-08-1980,
    parkingSlot: false,
    rentPrice: 200,
    sellPrice: 0,
    pictures: ''
  }
]

const Cards: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <CardsContainer>
      <div>Lista de propiedades</div>
      {
        
      }
    </CardsContainer>
  )
}

export default Cards