import React from 'react'
import Button from '../../styledComponents/Button'
import StyledCard from '../../styledComponents/StyledCard'
import styles from './styles.module.css'
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
        {rentPrice > 0 ? rentPrice : sellPrice}
      </div>
      <div>
        {address}
      </div>
      <div>
        <Button className='type'>{type}</Button>
        {area}
        {rooms}
        {bathrooms}
        {status}
      </div>
      <div className={styles.viewDetails}>
        <Button>Ver detalles</Button>
      </div>
    </StyledCard>
  )
}

export default Card