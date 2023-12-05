import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders Hello World as text", () => {
  // Arrange
  render(<Greeting />);

  // Act
  // ... Nothing in this case.

  // Assert
  const hellowWorldElement = screen.getByText("Hello World", { exact: false });
  expect(hellowWorldElement).toBeInTheDocument();
});
