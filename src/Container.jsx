import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

function Container() {
  const [text, setText] = useState("");
  const numOfCharacters = text.length;
  const numOfWords = text.split(" ").filter((word) => word !== "").length;

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats numOfWords={numOfWords} numOfCharacters={numOfCharacters} />
    </main>
  );
}

export default Container;
