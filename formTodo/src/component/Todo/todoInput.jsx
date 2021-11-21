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
  const onFormSubmit = (e) => {
    e.preventDefault();
    onCreatTask(text);
  };
  return (
    <form onSubmit={onFormSubmit}>
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
      <input type="submit" value="ADD" />
    </form>
  );
}
