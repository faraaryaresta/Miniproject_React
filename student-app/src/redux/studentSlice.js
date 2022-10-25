import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name: "student",
    initialState: {
        nama: "Farah",
        nisn: "23456",
        noHandphone: "",
        email: "",
        jenisKelamin: "",
        alamat: "",
    },
    reducers: {
        update: (state, action) => {
            state.nama = action.payload.nama;
            state.nisn = action.payload.nisn;
            state.noHandphone = action.payload.noHandphone;
            state.email = action.payload.email;
            state.jenisKelamin = action.payload.jenisKelamin;
            state.alamat = action.payload.alamat;
        }
    }
});

export const {update} = studentSlice.actions;
export default studentSlice.reducer;