import React from 'react'
import Button from '../../styledComponents/Button'
import StyledCard from '../../styledComponents/StyledCard'
import styles from './styles.module.css'
import BathIcon from '../Icons/Bath'
import RoomIcon from '../Icons/Room'
import AreaIcon from '../Icons/Area'
import StyledText from '../../styledComponents/StyledText'

interface CardProps {
  id: number,
  address: string,
  area: number,
  type: string,
  rooms: number,
  status: string,
  city: string,
  bathrooms: number,
  rentPrice: number,
  sellPrice: number,
  pictures: string
}

const Card: React.FC<CardProps> = ({id, address, area, type, rooms, status, bathrooms, rentPrice, sellPrice, pictures }) => {
  return (
    <StyledCard>
      <img src = {pictures} />
      <div>
        <h2>
          $ {rentPrice > 0 ? rentPrice : sellPrice} 
        </h2>
      </div>
      <div>
        <StyledText>{type}</StyledText> 
      </div>
      <div>
        {address}
      </div>
      <div>
        <h4>
          <AreaIcon/> {area}m2   
          <RoomIcon/> {rooms} hab
          <BathIcon/> {bathrooms} baños
        </h4>
      </div>
      <blockquote>
        <Button className='type'>{status}</Button>
      </blockquote>
    </StyledCard>
  )
}

export default Card