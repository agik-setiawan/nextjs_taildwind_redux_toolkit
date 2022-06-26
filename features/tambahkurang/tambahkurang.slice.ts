import { createSlice } from "@reduxjs/toolkit";

export const tambahkurang = createSlice({
    name:'tambahkurang',
    initialState:{
        total:0
    },
    reducers:{
        tambah(state){
            state.total++;
        },
        kurang(state){
            state.total--;
        }
    }
});

export const {actions} = tambahkurang;
export const {tambah,kurang} = actions;