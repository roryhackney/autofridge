import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TodoListManager from '../TodoListManager';

describe('TodoListManager', () => {
    it('renders initial input and add button', () => {
        const { getByPlaceholderText, getByTestId } = render(<TodoListManager />);

        expect(getByPlaceholderText('Enter Todo')).toBeTruthy();
        expect(getByTestId('add-todo-button')).toBeTruthy();
    });

    // Your code here
    it("adds a new todo", () => {
        const {getByTestId, getByText} = render(<TodoListManager />);
        const input = getByTestId("input-todo");
        fireEvent.changeText(input, "My todo");
        expect(input.props.value).toBe("My todo");

        const button = getByTestId("add-todo-button");
        fireEvent.press(button);

        expect(input.props.value).toBe("");
        const addedTodo = getByText("My todo");
        expect(addedTodo).toBeOnTheScreen;
    });

    it("doesn't add if blank", () => {
        const {getByTestId, queryByText} = render(<TodoListManager />);
        const button = getByTestId("add-todo-button");
        fireEvent.press(button);
        //only added if todo was added
        expect(queryByText("Remove")).not.toBeOnTheScreen;
    });

    it("removes a todo", () => {
        const { getByPlaceholderText, getByTestId, getByText } = render(<TodoListManager />);
        fireEvent.changeText(getByTestId("input-todo"), "My todo");
        fireEvent.press(getByTestId("add-todo-button"));
        const addedTodo = getByText("My todo");
        expect(addedTodo).toBeOnTheScreen;

        const deleteButton = getByText("Remove");
        expect(deleteButton).toBeOnTheScreen;
        fireEvent.press(deleteButton);

        expect(addedTodo).not.toBeOnTheScreen;
        expect(deleteButton).not.toBeOnTheScreen;
    });
});
