import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getStudents = createAsyncThunk("students/getStudents", async() => {
    const response = await axios.get('https://633e982c83f50e9ba3b3d23f.mockapi.io/v1/students');
    return response.data;
});

export const addStudents = createAsyncThunk("students/addStudents", async({nama, nisn, email, noHandphone, jenisKelamin, alamat}) => {
    const response = await axios.post('https://633e982c83f50e9ba3b3d23f.mockapi.io/v1/students', {
        nama, 
        nisn, 
        email, 
        noHandphone, 
        jenisKelamin, 
        alamat
    });
    return response.data;
});


const studentEntitiy = createEntityAdapter({
    selectId: (student) => student.id
});

const studentSlice = createSlice({
    name: "student",
    initialState: studentEntitiy.getInitialState(),
    extraReducers: {
        [getStudents.fulfilled]: (state, action) => {
            studentEntitiy.setAll(state, action.payload);
        },
        [addStudents.fulfilled]: (state, action) => {
            studentEntitiy.setOne(state, action.payload);
        }
    }
});

export const studentSelectors = studentEntitiy.getSelectors(state => state.student);
// export const {update} = studentSlice.actions;
export default studentSlice.reducer;