import React from 'react'
import Button from '../../styledComponents/Button'
import CardContainer from '../../styledComponents/ContainerCard'
import StyledCard from '../../styledComponents/StyledCard'

const Home: React.FC = () => {
  return (
    <div>
      {/* ESTO ES SOLO ES PRUEBA BORRAR CON GUSTO: */}
      <CardContainer>
        <StyledCard>
          <Button>Botón de prueba</Button>
        </StyledCard>
      </CardContainer>
    </div>
  )
}

export default Home