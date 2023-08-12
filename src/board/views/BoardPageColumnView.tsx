import { FC, useMemo } from "react";
import { useBoardContext } from "../BoardContextProvider";

export const BoardPageColumnView: FC = () => {
  const { state, dispatch } = useBoardContext();

  const columns = useMemo(() => state.columns, [state.columns]);

  return (
    <div className="board-columns-container">
      <code>{JSON.stringify(columns)}</code>
    </div>
  );
};
