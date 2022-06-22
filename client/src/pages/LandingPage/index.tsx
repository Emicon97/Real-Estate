import React from 'react'
import axios from 'axios';
import { useAppDispatch,useAppSelector } from '../../redux/hooks';



const LandingPage: React.FC = () => {
  const states = async () => {
    const state = await axios.get('localhost:3000/states');
    console.log(state)
     return state.data
  }
  return (
    <div>LandingPage</div>
  )
}

export default LandingPage