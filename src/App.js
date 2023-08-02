// import ReactFCCtest from "react-fcctest";
import "./styles.css";
import { marked } from "marked";
import React, { useState, useRef, useEffect } from "react";

// const Header = () => <h1 id="header">Markdown Preview with React</h1>;
const Footer = () => (
  <h6 id="footer">Stay tuned for even more Takeshi's projects</h6>
);
export default function App() {
  const [input, setInput] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  function anotherExample(firstLine, lastLine) {

    }
  }
  \`\`\`
  - First item
  - Second item
  - Third item
  > blockquote
  ![alt text](image.jpg)
  **bold text**
  `);
  marked.setOptions({
    breaks: true
  });
  function handleChange(event) {
    setInput(event.target.value);
  }
  const markdown = marked.parse(input);

  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.focus();
  }, []);
  return (
    <>
      {/* <ReactFCCtest /> */}
      {/* <Header /> */}
      <div id="wapper">
        <textarea
          ref={textareaRef}
          autoFocus
          id="editor"
          value={input}
          onChange={handleChange}
        />
        <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }} />
      </div>
      <Footer />
    </>
  );
}
