import { createSlice,PayloadAction,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

type State = {
address: String
area: String
type: String
rooms: Number
status:String
city: String
bathroom: Number
neighbourhood: String
constructionDate: String
renovationDate: String
parkingSlot:  Boolean
rentPrice: Number
sellPrice: Number
pictures: String



}
type initialState = {
    states:State[]
}
const initialState: initialState = {
  states: [],
};

export const fetchStates=createAsyncThunk()=>{
    axios.get('localhost:3000/states')
        dispatch(setStates(response))
    } catch (error) {
        console.log(error);
    }
}
export const stateResults = createSlice({
  name: "stateResults",
  initialState,
  reducers: {
    setStates: (state, action:PayloadAction<State[]>) => {
        state.states = action.payload;
    },
  },
});

export const {
    setStates
} = stateResults.actions
 export default stateResults.reducer