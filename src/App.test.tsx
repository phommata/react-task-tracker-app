import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  // TODO: Step 1
  it("renders the app name", () => {
    expect(screen.getByText("Task Tracker"));
  });

  describe("Conditional rendering", () => {
    // TODO: Step 12
    it("hides the `Add Task` button when 'Add Task' is clicked", () => {
      userEvent.click(screen.getByText("Add Task"));

      expect(screen.queryByText("Add Task")).not.toBeInTheDocument();
    });

    // TODO: Step 13
    it("opens the TaskModal when 'Add Task' is clicked", () => {
      userEvent.click(screen.getByText("Add Task"));

      expect(screen.queryByText("Task Title")).toBeInTheDocument();
    });

    // TODO: Step 14
    it("closes the modal and reveals the `Add Task` button when task is submitted", () => {
      userEvent.click(screen.getByText("Add Task"));
      userEvent.type(screen.getByLabelText("Task Title"), "Test Title");
      userEvent.click(screen.getByText("Submit"));

      expect(screen.queryByText("Task Title")).not.toBeInTheDocument();
      expect(screen.queryByText("Add Task")).toBeInTheDocument();
    });
  });

  describe("Happy path integration test", () => {
    // TODO: Step 15
    it("should successfully add tasks to the list", () => {
      userEvent.click(screen.getByText("Add Task"));
      userEvent.type(screen.getByLabelText("Task Title"), "AddedTask1");
      userEvent.click(screen.getByText("Submit"));

      expect(screen.getByText("AddedTask1")).toBeInTheDocument();
    });
  });
});
