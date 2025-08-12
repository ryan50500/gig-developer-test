import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch matches data
export const fetchMatches = createAsyncThunk('betting/fetchMatches', async () => {
  const response = await fetch('/data/matches.json');
  if (!response.ok) {
    throw new Error('Failed to fetch matches data');
  }
  return response.json();
});

const bettingSlice = createSlice({
  name: 'betting',
  initialState: {
    betSlip: [],
    matchesData: null,
    status: 'idle', 
    error: null,
  },
  reducers: {
    addBet: (state, action) => {
      state.betSlip.push(action.payload);
    },
    removeBet: (state, action) => {
      state.betSlip = state.betSlip.filter((bet) => bet.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.matchesData = action.payload;
      })
      .addCase(fetchMatches.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addBet, removeBet } = bettingSlice.actions;
export default bettingSlice.reducer;
