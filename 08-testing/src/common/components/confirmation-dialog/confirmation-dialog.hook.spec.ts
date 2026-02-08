import { renderHook, act } from "@testing-library/react";
import { useConfirmationDialog } from "./confirmation-dialog.hook";
import { ac } from "vitest/dist/chunks/reporters.d.DG9VKi4m";

describe("confirmation dialog hook spec suite", () => {
  it("should return default values when no parameters are provided", () => {
    const { result } = renderHook(() => useConfirmationDialog());

    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete.id).toBe("");
    expect(result.current.itemToDelete.name).toBe("");
    expect(result.current.onAccept).toBeDefined();
    expect(result.current.onClose).toBeDefined();
    expect(result.current.onOpenDialog).toBeDefined();
  });

  it("should open the dialog with the lookup", () => {
    const { result } = renderHook(() => useConfirmationDialog());

    const toLookUp = { id: "1", name: "Test Item" };

    act(() => {
      result.current.onOpenDialog(toLookUp);
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toBe(toLookUp);

  });

  it("should close the dialog ", () => {
    const { result } = renderHook(() => useConfirmationDialog());

    const toLookUp = { id: "1", name: "Test Item" };

    act(() => {
      result.current.onOpenDialog(toLookUp);
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toBe(toLookUp);

    act(() => {
      result.current.onClose();
    });

    expect(result.current.isOpen).toBe(false);

  });

  it("should remove item to delete on on accept ", () => {
    const { result } = renderHook(() => useConfirmationDialog());

    const toLookUp = { id: "1", name: "Test Item" };

    act(() => {
      result.current.onOpenDialog(toLookUp);
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toBe(toLookUp);

    act(() => {
      result.current.onAccept();
    });

    expect(result.current.itemToDelete.id).toBe("");
    expect(result.current.itemToDelete.name).toBe("");

  });

});
