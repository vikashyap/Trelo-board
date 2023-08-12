import { FC, ReactNode, createContext, useContext } from "react";
import { BoardContextType, BoardState } from "./types/Board";

const initialState: BoardState = {
  columns: [],
  cards: [],
};

const BoardContext = createContext<BoardContextType | undefined>(undefined);

export const BoardProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <BoardContext.Provider value={initialState}>
      {children}
    </BoardContext.Provider>
  );
};

export const useBoardContext = (): BoardContextType => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
