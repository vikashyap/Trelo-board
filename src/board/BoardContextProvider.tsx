import { FC, ReactNode, createContext, useContext } from "react";

const BoardContext = createContext<any>(undefined);

export const BoardProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <BoardContext.Provider value={null}>{children}</BoardContext.Provider>;
};

export const useBoardContext = () => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
