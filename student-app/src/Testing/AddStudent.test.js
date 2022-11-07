import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import AddStudent from "../pages/Students/AddStudent";
const setup = () => {
    return render (<AddStudent/>)
}

describe('AddStudent', () => {
    test('render AddStudent component', () => {
        setup();
        // screen.debug()

        expect(screen.getByText('Form Students')).toBeInTheDocument();
        expect(screen.getByLabelText(/Nama/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Umur/)).toBeInTheDocument();
        expect(screen.getByLabelText(/No Handphone/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Tanggal/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Jenis Kelamin/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Laki-Laki/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Perempuan/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Alamat/)).toBeInTheDocument();
    });

    test('input text', () => {
        setup();

        fireEvent.input(
            screen.getByRole("textbox", {name: /nama/i}),
            {target: {value: "Farah Aryaresta"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /umur/i}),
            {target: {value: "20"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /noHandphone/i}),
            {target: {value: "085356758423"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /tanggal/i}),
            {target: {value: "2022-11-01"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /jenisKelamin/i}),
            {target: {value: "Laki-Laki"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /alamat/i}),
            {target: {value: "Jln. Pemuda no 18, Bulus, Semarang"}}
        )
          
        expect(screen.getByLabelText(/Nama/)).toHaveValue("Farah Aryaresta");
        expect(screen.getByLabelText(/Umur/)).toHaveValue("20");
        expect(screen.getByLabelText(/No Handphone/)).toHaveValue("085356758423");
        expect(screen.getByLabelText(/tanggal/)).toHaveValue("2022-11-01");
        expect(screen.getByLabelText(/jenisKelamin/)).toHaveValue("Laki-Laki");
        expect(screen.getByLabelText(/alamat/)).toHaveValue("Jln. Pemuda no 18, Bulus, Semarang");     
    });

    test('submit button', () => {
        setup();
        // screen.debug()
        fireEvent.input(
            screen.getByRole("textbox", {name: /nama/i}),
            {target: {value: "Farah Aryaresta"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /umur/i}),
            {target: {value: "20"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /noHandphone/i}),
            {target: {value: "085356758423"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /tanggal/i}),
            {target: {value: "2022-11-01"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /jenisKelamin/i}),
            {target: {value: "Laki-Laki"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /alamat/i}),
            {target: {value: "Jln. Pemuda no 18, Bulus, Semarang"}}
        )
        
        fireEvent.click(screen.getByText("Submit"));

        expect(screen.getByLabelText(/Submit/)).toBeInTheDocument("Menambahkan students");
        expect(screen.getByLabelText(/Submit/)).toBeInTheDocument("Ada harus mengisi form terlebih dahulu!");
             
    });
});
