import {useState} from "react";
import styles from "../SearchCommandBar/SearchCommandBar.module.css";

interface Command {
  id: string;
  name: string;
  url: string;
  shortcut: string;
}

interface EditCommandProps {
  command: Command;
  onSave: (updatedCommand: Command) => void;
  onCancel: () => void;
}

const EditComamand = (props: EditCommandProps) => {
    const { command, onSave, onCancel } = props;
    const [editedCommand, setEditedCommand] = useState(command);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedCommand({ ...editedCommand, [name]: value });
  };

  const handleSubmit = () => {
    onSave(editedCommand);
  };

  return (
    <div className={styles.editCommand}>
      <h2>Edit Command</h2>
      <label>
        Name:
        <input type="text" name="name" value={editedCommand.name} onChange={handleChange} />
      </label>
      <label>
        URL:
        <input type="text" name="url" value={editedCommand.url} onChange={handleChange} />
      </label>
      <label>
        Shortcut:
        <input type="text" name="shortcut" value={editedCommand.shortcut} onChange={handleChange} />
      </label>
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditComamand;
