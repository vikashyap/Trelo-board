import { FC, useCallback } from "react";
import "./Input.css";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Input: FC<Props> = ({ onChange, value }) => {
  const handleInputFocus = useCallback(
    () => (e: React.FocusEvent<HTMLInputElement>) => {
      const inputElement = e.target as HTMLInputElement;
      inputElement.select();
    },
    []
  );
  return (
    <input
      autoFocus
      className="board-input"
      type="text"
      onFocus={handleInputFocus()}
      value={value}
      onChange={onChange}
    />
  );
};
