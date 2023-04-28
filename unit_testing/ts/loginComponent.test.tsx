import React from "react";
import { render } from "@testing-library/react";
import { t } from "ttag";
import Login from "./Login";

const mockProviders = [
  {
    name: "mockProvider1",
    Button: () => <button>Mock Provider 1 Button</button>,
  },
  {
    name: "mockProvider2",
    Button: () => <button>Mock Provider 2 Button</button>,
  },
];

describe("Login", () => {
  test("renders the login title correctly", () => {
    const { getByText } = render(<Login providers={mockProviders} />);
    expect(getByText(t`Sign in to Metabase`)).toBeInTheDocument();
  });

  test("renders the correct provider button", () => {
    const { getByText } = render(
      <Login providers={mockProviders} providerName="mockProvider1" />
    );
    expect(getByText("Mock Provider 1 Button")).toBeInTheDocument();
  });

  test("renders all provider buttons when no provider is selected", () => {
    const { getByText } = render(<Login providers={mockProviders} />);
    expect(getByText("Mock Provider 1 Button")).toBeInTheDocument();
    expect(getByText("Mock Provider 2 Button")).toBeInTheDocument();
  });
});
