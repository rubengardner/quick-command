import {useState} from "react";
import styles from "../SearchCommandBar/SearchCommandBar.module.css";
import {Command} from "../../commands/commandTypes";


interface EditCommandProps {
    command: Command;
    onSave: (updatedCommand: Command) => void;
    onCancel: () => void;
}


const EditComamand = (props: EditCommandProps) => {
    const {command, onSave, onCancel} = props;
    const [editedCommand, setEditedCommand] = useState(command);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setEditedCommand({...editedCommand, [name]: value});
    };

    const handleSubmit = () => {
        onSave(editedCommand);
    };

    return (
        <div>
            <h2>Edit Command</h2>
            <label>
                Name:
                <input type="text" name="name" value={editedCommand.name} onChange={handleChange}/>
            </label>
            <label>
                Shortcut:
                <input type="text" name="shortcut" value={editedCommand.shortcut} onChange={handleChange}/>
            </label>

            {/* Use type narrowing to handle specific command types */}
            {editedCommand.type === 'navigate' && (
                <label>
                    URL:
                    <input type="text" name="url" value={editedCommand.url} onChange={handleChange}/>
                </label>
            )}
            {editedCommand.type === 'copy' && (
                <label>
                    Text to Copy:
                    <input type="text" name="textToCopy" value={editedCommand.textToCopy} onChange={handleChange}/>
                </label>
            )}

            <button onClick={handleSubmit}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
};

export default EditComamand;
