import { FC } from "react";
import "./BoardLayoutStyle.css";
import { BoardPageAddColumnView } from "./BoardPageAddColumnView";
import { BoardPageColumnView } from "./BoardPageColumnView";
export const BoardLayout: FC = () => {
  return (
    <div className="board-layout">
      <BoardPageAddColumnView />
      <BoardPageColumnView />
    </div>
  );
};
