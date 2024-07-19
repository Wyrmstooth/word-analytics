import { useState } from "react";
import Warning from "./Warning";

function Textarea({ text, setText }) {
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      setWarningText("Please do not use <script> tags.");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("Please do not use @.");
      newText = newText.replace("@", "");
    } else {
      setWarningText("");
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        placeholder="Enter Text Here"
        spellCheck="false"
        onChange={handleChange}
      />
      {warningText && <Warning warningText={warningText} />}
    </div>
  );
}

export default Textarea;
