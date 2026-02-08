import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ConfirmationDialogComponent } from "./confirmation-dialog.component";

describe("ConfirmationDialogComponent test suite", () => {
  const defaultProps = {
    isOpen: true,
    onAccept: vi.fn(),
    onClose: vi.fn(),
    title: "Test Title",
    labels: {
      closeButton: "Cancel",
      acceptButton: "Accept",
    },
    children: <p>Test content</p>,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render title and content when isOpen is true", () => {
    render(<ConfirmationDialogComponent {...defaultProps} />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test content")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Accept" })).toBeInTheDocument();
  });


  it("should call onClose when close button is clicked", async () => {
    const onClose = vi.fn();
    render(<ConfirmationDialogComponent {...defaultProps} onClose={onClose} />);

    await userEvent.click(screen.getByText("Cancel"));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should call onAccept and onClose when accept button is clicked", async () => {
    const onAccept = vi.fn();
    const onClose = vi.fn();
    render(
      <ConfirmationDialogComponent
        {...defaultProps}
        onAccept={onAccept}
        onClose={onClose}
      />
    );

    await userEvent.click(screen.getByText("Accept"));

    expect(onAccept).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not render dialog content when isOpen is false", () => {
    render(<ConfirmationDialogComponent {...defaultProps} isOpen={false} />);

    expect(screen.queryByText("Test Title")).not.toBeInTheDocument();
  });
});
