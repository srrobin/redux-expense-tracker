import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addTrans, deleteTrans, editTrans, getTrans } from './transactionsAPI';

const initialState = {
  transactions: [],
  isLoading: false,
  isError: false,
  error: "",
  editing:{}
};


export const getTransAsync = createAsyncThunk(
  'trans/getTrans',
  async () => {
    const response = await getTrans();
    return response;
  }
);
export const addTransAsync = createAsyncThunk(
  'trans/addTrans',
  async (data) => {
    const response = await addTrans(data);
    return response;
  }
);
export const editTransAsync = createAsyncThunk(
  'trans/editTrans',
  async ({id,data}) => {
    const response = await editTrans(id,data);
    return response;
  }
);
export const deleteTransAsync = createAsyncThunk(
  'trans/deleteTrans',
  async (id) => {
    const response = await deleteTrans(id);
    return response;
  }
);

export const transSlice = createSlice({
  name: 'counter',
  initialState,
  reducers:{
      editActive : (state, action) => {
         state.editing = action.payload;
      },
      editInActive : (state) => {
         state.editing = {};
      }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTransAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getTransAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.transactions = action.payload;
      })
      .addCase(getTransAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.transactions = [];
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(addTransAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addTransAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.transactions.push(action.payload);
      })
      .addCase(addTransAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(editTransAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(editTransAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;

        const findIndex = state.transactions.findIndex((t) => 
         t.id  === action.payload.id)
         state.transactions[findIndex] = action.payload;
      })
      .addCase(editTransAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(deleteTransAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteTransAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.transactions = state.transactions.filter((t) => 
        t.id !== action.meta.arg);
      })
      .addCase(deleteTransAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
  },
});

export default transSlice.reducer;
export const {editActive,editInActive} =  transSlice.actions;
