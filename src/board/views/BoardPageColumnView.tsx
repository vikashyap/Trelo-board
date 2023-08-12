import { FC, useMemo } from "react";
import StyledH2 from "../../components/StyledComponents/StyledH2";
import { useBoardContext } from "../BoardContextProvider";

export const BoardPageColumnView: FC = () => {
  const { state, dispatch } = useBoardContext();

  const columns = useMemo(() => state.columns, [state.columns]);

  return (
    <div className="board-columns-container">
      {columns.map((column) => (
        <div key={column.id} className="board-column">
          <div className="column-heading">
            <StyledH2>{column.title}</StyledH2>
          </div>
        </div>
      ))}
    </div>
  );
};
