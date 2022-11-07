import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Login from '../components/Auth/Login'
const setup = () => {
    return render (<Login/>)
}

describe('Login', () => {
    test('render Login component', () => {
        setup();
        // screen.debug()

        expect(screen.getByText('LogIn')).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password/)).toBeInTheDocument();
    });

    test('input text', () => {
        setup();

        fireEvent.input(
            screen.getByRole("textbox", {name: /email/i}),
            {target: {value: "fara@gmail.com"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /password/i}),
            {target: {value: "fara123"}}
        )
        
        expect(screen.getByLabelText(/Email/)).toHaveValue("fara@gmail.com");
        expect(screen.getByLabelText(/Password/)).toHaveValue("fara123");
    });

    test('submit button', () => {
        setup();

        fireEvent.input(
            screen.getByRole("textbox", {name: /email/i}),
            {target: {value: "fara@gmail.com"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /password/i}),
            {target: {value: "fara123"}}
        )

        fireEvent.click(screen.getByText("Submit"));
        
        expect(screen.getByLabelText(/Submit/)).toHaveValue("You have not filled in!");
        expect(screen.getByLabelText(/Submit/)).toHaveValue("Fill correct Info else keep trying!");
        expect(screen.getByLabelText(/Submit/)).toHaveValue("Welcome to DayCare.");
             
    });
});