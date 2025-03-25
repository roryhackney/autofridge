import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Bell from "@/components/Bell";  
import NotificationScreen from "@/components/NotificationScreen"; 
import BellIcon from "../icons/BellIcon";


jest.mock("@/assets/icons/BellIcon", () => "BellIcon");
jest.mock("@/components/NotificationScreen", () => "NotificationScreen");

describe("Bell Component", () => {
  test("does not show badge when there are no notifications", () => {
    const { queryByText } = render(<Bell notifications={0} />);

    
    expect(queryByText("0")).toBeNull();
  });
 });
