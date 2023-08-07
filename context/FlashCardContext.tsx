import React, { ReactNode, createContext, useReducer } from "react";
import { FlashCard } from "../interfaces/FlashCard";
import {
  Action,
  FlashCardState,
  flashCardReducer,
} from "../reducers/flashCardReducer";

interface FlashCardContextProps {
  state: FlashCardState;
  dispatch: React.Dispatch<Action>;
}

interface FlashCardProviderProps {
  children: ReactNode;
  initialFlashcards: FlashCard[];
}

const FlashCardContext = createContext<FlashCardContextProps | undefined>(
  undefined
);

export function FlashCardProvider({
  children,
  initialFlashcards,
}: FlashCardProviderProps) {
  const [state, dispatch] = useReducer(flashCardReducer, {
    flashcards: initialFlashcards,
  });

  return (
    <FlashCardContext.Provider value={{ state, dispatch }}>
      {children}
    </FlashCardContext.Provider>
  );
}

export default FlashCardContext;
