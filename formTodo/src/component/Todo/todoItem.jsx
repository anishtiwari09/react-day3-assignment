import Button from "./Button";

export default function TodoItem({ data, handle, handleDelete, handleTogle }) {
  return (
    <ul>
      {data.map((item) => (
        <li>
          {item.title} - {item.description} - {item.status ? "Done" : "Pending"}
          <Button title="Toggle" onClick={() => handleTogle(item.id)} />
          <Button title="X" onClick={() => handleDelete(item.id)} />
        </li>
      ))}
    </ul>
  );
}
