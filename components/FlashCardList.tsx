import { EyeIcon } from "lucide-react";
import { useContext } from "react";
import FlashCardContext from "../context/FlashCardContext";
import { FlashCard } from "./FlashCard";

export const FlashCardList = () => {
  const { state } = useContext(FlashCardContext);

  return (
    <div className="flashcard-list">
      {state.flashcards.map((flashcard) => (
        <div key={flashcard.id} onClick={() => console.log(flashcard)}>
          <FlashCard.Root>
            <FlashCard.Category>{flashcard.category}</FlashCard.Category>
            <FlashCard.Question>{flashcard.question}</FlashCard.Question>
            <FlashCard.Icon icon={EyeIcon} flashCardId={flashcard.id} />
            {flashcard.isShowingAnswer && (
              <FlashCard.Answer>{flashcard.answer}</FlashCard.Answer>
            )}
          </FlashCard.Root>
        </div>
      ))}
    </div>
  );
};
