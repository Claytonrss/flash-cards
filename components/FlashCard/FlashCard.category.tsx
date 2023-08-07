import { ReactNode } from "react";

interface FlashCardCategoryProps {
  children: ReactNode;
}

export const FlashCardCategory = ({ children }: FlashCardCategoryProps) => {
  return <h2 className="category text-xl font-bold mb-4">{children}</h2>;
};
