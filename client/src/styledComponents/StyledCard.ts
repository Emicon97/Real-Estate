import styled from 'styled-components'

const StyledCard = styled.div`
  cursor: pointer;
  min-height: 15rem;
  margin: 14px;
  gap:2px;
  align-items: flex-start;
  display: flex;
  flex-direction: column; 
  border-radius: 1rem;
  border: 1px solid #efefef;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
  padding-bottom: 10px;
  
  img {
    width: 300px;
    height: 240px;
    object-fit: cover;
    border-radius: 1rem;
  }
`
export default StyledCard