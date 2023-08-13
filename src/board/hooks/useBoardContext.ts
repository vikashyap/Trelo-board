import { useContext } from "react";
import { BoardContext } from "../BoardContextProvider";
import { BoardContextType } from "../types/Board";

export const useBoardContext = (): BoardContextType => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error("useBoardContext must be used within a BoardProvider");
  }
  return context;
};
