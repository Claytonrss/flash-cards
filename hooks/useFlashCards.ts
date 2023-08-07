import { useCallback, useContext } from "react";
import FlashCardContext from "../context/FlashCardContext";

export function useFlashCards() {
  const {
    state: { flashcards },
    dispatch,
  } = useContext(FlashCardContext);

  const toggleShowAnswer = useCallback(
    (id: number) => {
      dispatch({ type: "TOGGLE_ANSWER", id });
    },
    [dispatch]
  );

  const setCategory = useCallback(
    (category: string) => {
      dispatch({ type: "SET_CATEGORY", category });
    },
    [dispatch]
  );

  return {
    flashcards,
    toggleShowAnswer,
    setCategory,
  };
}
