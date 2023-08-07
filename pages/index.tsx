import fs from "fs";
import { GetStaticProps } from "next";
import path from "path";
import { CategoryFilter } from "../components/CategoryFilter";
import { FlashCardList } from "../components/FlashCardList";
import { FlashCard } from "../interfaces/FlashCard";

interface HomePageProps {
  flashcards: FlashCard[];
}

export default function HomePage({ flashcards }: HomePageProps) {
  return (
    <div className="container">
      <CategoryFilter />
      <FlashCardList />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), "flashcards.json");
  const flashcards: FlashCard[] = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const flashCardsFormatted = flashcards.map((flashcard) => ({
    ...flashcard,
    isShowingAnswer: false,
  }));

  return {
    props: {
      flashcards: flashCardsFormatted,
    },
  };
};
