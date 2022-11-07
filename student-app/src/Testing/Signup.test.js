import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Signup from '../components/Auth/Login'
const setup = () => {
    return render (<Signup/>)
}

describe('Signup', () => {
    test('render Signup component', () => {
        setup();
        // screen.debug()

        expect(screen.getByText('Regristrasi')).toBeInTheDocument();
        expect(screen.getByLabelText(/Name/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password/)).toBeInTheDocument();
    });

    test('input text', () => {
        setup();

        fireEvent.input(
            screen.getByRole("textbox", {name: /nama/i}),
            {target: {value: "Farah Aryaresta"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /email/i}),
            {target: {value: "fara@gmail.com"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /password/i}),
            {target: {value: "fara123"}}
        )
        
        expect(screen.getByLabelText(/Name/)).toHaveValue("Farah Aryaresta");
        expect(screen.getByLabelText(/Email/)).toHaveValue("fara@gmail.com");
        expect(screen.getByLabelText(/Password/)).toHaveValue("fara123");
    });

    test('submit button', () => {
        setup();

        fireEvent.input(
            screen.getByRole("textbox", {name: /nama/i}),
            {target: {value: "Farah Aryaresta"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /email/i}),
            {target: {value: "fara@gmail.com"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /password/i}),
            {target: {value: "fara123"}}
        )

        fireEvent.click(screen.getByText("Submit"));
        
        expect(screen.getByLabelText(/Submit/)).toHaveValue("Pleace Fill Every Field!");
        expect(screen.getByLabelText(/Submit/)).toHaveValue("Saved In Local Storage");
             
    });
});