import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import GroceryList from "../../app/(logged-in)/grocery-list";

describe("GroceryList - Delete Item", () => {
    it("removes checked items from the list", () => {
        const { getByText, getAllByRole, queryByText } = render(<GroceryList />);

        // Find and check an item
        const itemText = "1 Granny Smith Apples";
        const checkbox = getAllByRole("checkbox")[0]; // Select the first checkbox
        fireEvent.press(checkbox);

        // Find and press the delete button
        const deleteButton = getByText("Delete From List");
        fireEvent.press(deleteButton);

        // Expect the item to be removed
        expect(queryByText(itemText)).toBeNull();
    });
});
