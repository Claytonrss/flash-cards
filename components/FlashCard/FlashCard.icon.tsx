import { ElementType } from "react";
import { useFlashCards } from "../../hooks/useFlashCards";

interface FlashCardIconProps {
  icon: ElementType;
  flashCardId: number;
}

export const FlashCardIcon = ({
  icon: Icon,
  flashCardId,
}: FlashCardIconProps) => {
  const { toggleShowAnswer } = useFlashCards();

  const handleCardClick = () => {
    toggleShowAnswer(flashCardId);
  };

  return (
    <Icon className="w-6 h-6 text-blue-600 mt-4" onClick={handleCardClick} />
  );
};
