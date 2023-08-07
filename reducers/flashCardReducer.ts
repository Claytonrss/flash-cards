import { FlashCard } from "../interfaces/FlashCard";

export interface FlashCardState {
  flashcards: FlashCard[];
}

export type Action =
  | { type: "TOGGLE_ANSWER"; id: number }
  | { type: "SET_CATEGORY"; category: string };

export function flashCardReducer(
  state: FlashCardState,
  action: Action
): FlashCardState {
  switch (action.type) {
    case "TOGGLE_ANSWER":
      return {
        ...state,
        flashcards: state.flashcards.map((card) =>
          card.id === action.id
            ? { ...card, isShowingAnswer: !card.isShowingAnswer }
            : card
        ),
      };
    case "SET_CATEGORY":
      return {
        ...state,
        flashcards: state.flashcards.filter(
          (flashcard) =>
            flashcard.category === action.category || action.category === ""
        ),
      };
    default:
      return state;
  }
}
