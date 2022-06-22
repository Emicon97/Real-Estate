import styled from 'styled-components'

const StyledCard = styled.div`
    align-items: center;
  border-radius: 1rem;
  border: 1px solid #efefef;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.3rem;
  min-width: 240px;
  max-width:250px;
  height: 290px;
  padding: 1.2rem 0 1.2rem 0 ;
  
  img {
    margin-top: 7px;
    border-radius: 40px;
    width: 180px;
    height: 180px;
  }
`
export default StyledCard