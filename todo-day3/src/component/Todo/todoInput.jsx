import { useState } from "react";
import Button from "./Button";

export default function TodoInput({ onCreatTask }) {
  const [text, setText] = useState({
    title: "",
    description: ""
  });
  const handleChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    return [onCreatTask(text)];
  };
  return (
    <div>
      <div>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={text.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={text.description}
          onChange={handleChange}
        />
      </div>
      <Button title="ADD" onClick={handleClick} />
    </div>
  );
}
