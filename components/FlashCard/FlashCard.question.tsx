import { ReactNode } from "react";

interface FlashCardQuestionProps {
  children: ReactNode;
}

export const FlashCardQuestion = ({ children }: FlashCardQuestionProps) => {
  return <p className="text text-lg">{children}</p>;
};
