import { ReactNode } from "react";

interface FlashCardRootProps {
  children: ReactNode;
}

export const FlashCardRoot = ({ children }: FlashCardRootProps) => {
  return (
    <div className="card bg-white rounded-lg shadow-lg m-4 p-6 cursor-pointer">
      {children}
    </div>
  );
};
