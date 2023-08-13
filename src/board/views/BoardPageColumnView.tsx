import { FC, useMemo, useState } from "react";
import { Input } from "../../components/Input/Input";
import StyledH2 from "../../components/StyledComponents/StyledH2";
import { useBoardContext } from "../hooks/useBoardContext";
import { Card } from "../types/Board";
import { BoardLayoutLocalVideoDemo } from "./BoardLayoutLocalVideoDemo";
import { BoardPageColumnAddCardView } from "./BoardPageColumnAddCardView";
import { BoardPageColumnCardActionsView } from "./BoardPageColumnCardActionsView";
import { BoardPageColumnCardView } from "./BoardPageColumnCardView";

export const BoardPageColumnView: FC = () => {
  const { state, dispatch } = useBoardContext();
  const [editingColumn, setEditingColumn] = useState<{
    [columnId: number]: { title: string };
  }>({});

  const columns = useMemo(() => state.columns, [state.columns]);

  if (!columns.length) {
    return <BoardLayoutLocalVideoDemo />;
  }

  return (
    <div className="board-columns-container">
      {columns.map((column) => (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const card = JSON.parse(e.dataTransfer.getData("card")) as Card;
            dispatch({
              type: "MOVE_CARD",
              payload: { cardId: card.id, newColumnId: column.id },
            });
          }}
          key={column.id}
          className="board-column"
        >
          <div className="column-heading">
            {editingColumn[column.id] === undefined ? (
              <StyledH2>{column.title}</StyledH2>
            ) : (
              <Input
                value={editingColumn[column.id]?.title ?? column.title}
                onChange={(e) => {
                  setEditingColumn((prevEditingCards) => ({
                    ...prevEditingCards,
                    [column.id]: { title: e.target.value },
                  }));
                }}
              />
            )}
            <div className="button-container">
              <BoardPageColumnCardActionsView
                id={column.id}
                editingData={editingColumn}
                setEditingData={setEditingColumn}
                boardEditAction={{
                  type: "EDIT_COLUMN",
                  payload: {
                    id: column.id,
                    title: editingColumn[column.id]?.title ?? column.title,
                  },
                }}
                boardDeleteAction={{
                  type: "DELETE_COLUMN",
                  payload: column.id,
                }}
              />
            </div>
          </div>
          <BoardPageColumnCardView columnId={column.id} />
          <BoardPageColumnAddCardView columnId={column.id} />
        </div>
      ))}
    </div>
  );
};
