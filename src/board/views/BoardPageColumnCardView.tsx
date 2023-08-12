import { FC, useMemo, useState } from "react";
import { Input } from "../../components/Input/Input";
import StyledH2 from "../../components/StyledComponents/StyledH2";
import { Textarea } from "../../components/Textarea/Textarea";
import { useBoardContext } from "../BoardContextProvider";
import { BoardPageColumnCardActionsView } from "./BoardPageColumnCardActionsView";

interface Props {
  columnId: number;
}

export const BoardPageColumnCardView: FC<Props> = ({ columnId }) => {
  const { state } = useBoardContext();
  // editingCards is a state that is used to store the card title that is being edited

  const [editingCards, setEditingCards] = useState<{
    [cardId: number]: { title: string; description?: string };
  }>({});

  // useMemo is used to prevent unnecessary re-renders
  const cards = useMemo(
    () => state.cards.filter((item) => item.columnId === columnId),
    [columnId, state.cards]
  );

  return (
    <div className="card-box">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <div className="card-heading">
            {editingCards[card.id] === undefined ? (
              <StyledH2>{card.title}</StyledH2>
            ) : (
              <Input
                value={editingCards[card.id]?.title ?? card.title}
                onChange={(e) => {
                  setEditingCards((prevEditingCards) => ({
                    ...prevEditingCards,
                    [card.id]: {
                      ...prevEditingCards[card.id],
                      title: e.target.value,
                    },
                  }));
                }}
              />
            )}

            <div className="card-action-container">
              <BoardPageColumnCardActionsView
                id={card.id}
                editingData={editingCards}
                setEditingData={setEditingCards}
                boardEditAction={{
                  type: "EDIT_CARD",
                  payload: {
                    id: card.id,
                    title: editingCards[card.id]?.title ?? card.title,
                    description:
                      editingCards[card.id]?.description ??
                      card.description ??
                      "",
                    columnId,
                  },
                }}
                boardDeleteAction={{
                  type: "DELETE_CARD",
                  payload: card.id,
                }}
              />
            </div>
          </div>
          {(card.description || editingCards[card.id]) && (
            <strong>Description:</strong>
          )}
          {editingCards[card.id] === undefined ? (
            <span>{card.description}</span>
          ) : (
            <Textarea
              value={
                editingCards[card.id]?.description ?? card.description ?? ""
              }
              onChange={(e) => {
                setEditingCards((prevEditingCards) => ({
                  ...prevEditingCards,
                  [card.id]: {
                    ...prevEditingCards[card.id],
                    description: e.target.value,
                  },
                }));
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
