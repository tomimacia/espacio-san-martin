import { RefObject, KeyboardEvent } from "react";
import { useOnKeyPress } from "./useOnKeyPress";

export const useEnter = (
  ref: RefObject<HTMLInputElement | null>,
  callback: (event: KeyboardEvent<HTMLInputElement>) => void
) => {
  return (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && ref.current === document.activeElement) {
      callback(event);
    }
  };
};
