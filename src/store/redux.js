import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState ={
  card:[]
}

const cardSlice = createSlice({
  name: "Card",
  initialState,
  reducers: {
    Add(state, {payload}) {
      const a = state.card.find(item => item.id === payload.id)
      if (a) {
        payload.quantity++;
        console.log("true");
      }
      else {
        state.card.push(payload);
        payload.quantity=1;
        console.log(state.card);
      }
      console.log(state.card);
    },
    Remove(state, { payload }) {
      const a = state.card.find(item => item.id === payload.id)
      if (a) payload.quantity--;
      else state.card.unshift(payload);
    },
  }
})

export const CardArrayActions = cardSlice.actions;

export const store = configureStore({
  reducer: {
    CardArray: cardSlice.reducer,
  }
})
