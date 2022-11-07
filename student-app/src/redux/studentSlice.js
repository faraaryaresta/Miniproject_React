import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getStudents = createAsyncThunk("students/getStudents", async() => {
    const response = await axios.get('https://633e982c83f50e9ba3b3d23f.mockapi.io/v1/students');
    return response.data;
});

export const addStudents = createAsyncThunk("students/addStudents", async({nama, umur, ortu, tanggal, noHandphone, jenisKelamin, alamat}) => {
    const response = await axios.post('https://633e982c83f50e9ba3b3d23f.mockapi.io/v1/students', {
        nama, 
        umur, 
        ortu,
        tanggal, 
        noHandphone, 
        jenisKelamin, 
        alamat
    });
    return response.data;
});

export const updateStudents = createAsyncThunk("students/updateStudents", async({id, nama, umur, ortu, tanggal, noHandphone, jenisKelamin, alamat}) => {
    const response = await axios.put(`https://633e982c83f50e9ba3b3d23f.mockapi.io/v1/students/${id}`, {
        nama, 
        umur, 
        ortu,
        tanggal, 
        noHandphone, 
        jenisKelamin, 
        alamat
    });
    return response.data;
});

export const deleteStudents = createAsyncThunk("students/deleteStudents", async (id) => {
    await axios.delete(`https://633e982c83f50e9ba3b3d23f.mockapi.io/v1/students/${id}`);
    return id;
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
            studentEntitiy.addOne(state, action.payload);
        },
        [deleteStudents.fulfilled]: (state, action) => {
            studentEntitiy.removeOne(state, action.payload);
        },
        [updateStudents.fulfilled]: (state, action) => {
            studentEntitiy.updateOne(state, { id: action.payload.id, updates: action.payload});
        }
    }
});

export const studentSelectors = studentEntitiy.getSelectors(state => state.student);
export default studentSlice.reducer;