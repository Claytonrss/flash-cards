import { ReactNode } from "react";

interface FlashCardAnswerProps {
  children: ReactNode;
}

export const FlashCardAnswer = ({ children }: FlashCardAnswerProps) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-lg">
      <p>{children}</p>
    </div>
  );
};
