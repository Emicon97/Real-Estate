import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardsContainer from '../../styledComponents/CardsContainer'
import Card from '../Card'

interface property {
  id: number,
  address: string,
  area: number,
  type: string,
  rooms: number,
  status: string,
  city: string,
  bathrooms: number,
  neighbourhood: number,
  constructionDate: string,
  parkingSlot: boolean,
  rentPrice: number,
  sellPrice: number,
  pictures: string
}

const propertiesList: property[] = [
  {
    id: 1,
    address: 'La perla 534',
    area: 170,
    type: 'casa',
    rooms: 2,
    status: 'available',
    city: 'Buenos aires',
    bathrooms: 2,
    neighbourhood: 2,
    constructionDate: '01-31-1990',
    parkingSlot: false,
    rentPrice: 200,
    sellPrice: 0,
    pictures: 'https://images1.forrent.com/i2/KpZbXTacfBro7B9aSYndt_p4u_ZgQMLdjZWKRXeOGiU/117/image.jpg'
  },

  {
    id: 2,
    address: 'La perla 500',
    area: 170,
    type: 'casa',
    rooms: 2,
    status: 'available',
    city: 'Buenos aires',
    bathrooms: 2,
    neighbourhood: 2,
    constructionDate: '01-31-1990',
    parkingSlot: false,
    rentPrice: 300,
    sellPrice: 0,
    pictures: 'https://images1.forrent.com/i2/lSw0qLyu-bjaLi-ifsQYPCQ5eRHR2Q1TKDnN9bB62PM/117/image.jpg'
  },

  {
    id: 3,
    address: 'La perla 500',
    area: 170,
    type: 'condominio',
    rooms: 2,
    status: 'available',
    city: 'Buenos aires',
    bathrooms: 2,
    neighbourhood: 2,
    constructionDate: '01-31-1990',
    parkingSlot: false,
    rentPrice: 0,
    sellPrice: 1900000,
    pictures: 'https://gestion.pe/resizer/TkV3ialO6t0dLcT8ciedCa6X7B0=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/44IPJVFIBJHUFCS4WG6XSTGPKQ.jpg'
  },
  {
    id: 4,
    address: 'La perla 500',
    area: 170,
    type: 'casa de playa',
    rooms: 2,
    status: 'available',
    city: 'Buenos aires',
    bathrooms: 2,
    neighbourhood: 2,
    constructionDate: '01-31-1990',
    parkingSlot: false,
    rentPrice: 0,
    sellPrice: 1900000,
    pictures: 'https://img10.naventcdn.com/avisos/111/00/12/95/56/13/360x266/201715697.jpg'
  }
]

const Cards: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <CardsContainer>
      {
        propertiesList.map(e => (
            <Card 
              key={e.id}
              id = {e.id}
              address = {e.address}
              area  = {e.area}
              type = {e.type}
              rooms = {e.rooms}
              status = {e.status}
              city = {e.city}
              bathrooms = {e.bathrooms}
              rentPrice = {e.rentPrice}
              sellPrice = {e.sellPrice}
              pictures = {e.pictures}
            />
        ))
      }
    </CardsContainer>
  )
}

export default Cards