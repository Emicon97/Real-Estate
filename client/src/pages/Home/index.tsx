import React from 'react'
import Cards from '../../components/Cards'
import CardsContainer from '../../styledComponents/CardsContainer'
import StyledCard from '../../styledComponents/StyledCard'

const Home: React.FC = () => {
  return (
    <div>
      <div>
        Aquí Navbar
      </div>
      <div>
        <div className='LeftPanel'>
          Aquí Filter Panel
        </div>
        <CardsContainer>
            <Cards/>
        </CardsContainer>
      </div>      
    </div>
  )
}

export default Home