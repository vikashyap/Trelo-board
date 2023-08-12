import React, { FC, useCallback } from "react";
import "./Textarea.css";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  rows?: number;
}

export const Textarea: FC<Props> = ({ onChange, value, rows }) => {
  const handleTextareaFocus = useCallback(
    (e: React.FocusEvent<HTMLTextAreaElement>) => {
      const textareaElement = e.target as HTMLTextAreaElement;
      textareaElement.select();
    },
    []
  );

  return (
    <textarea
      className="board-textarea"
      onFocus={handleTextareaFocus}
      value={value}
      onChange={onChange}
      rows={rows}
    />
  );
};
