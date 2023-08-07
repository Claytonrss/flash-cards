import type { AppProps } from "next/app";
import { FlashCardProvider } from "../context/FlashCardContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FlashCardProvider initialFlashcards={pageProps.flashcards}>
      <Component {...pageProps} />
    </FlashCardProvider>
  );
}
export default MyApp;
