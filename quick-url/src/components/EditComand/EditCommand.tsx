import {useState} from "react";
import {Command} from "../../commands/commandTypes";
import styles from './EditCommand.module.css';

interface EditCommandProps {
    command: Command;
    onSave: (updatedCommand: Command) => void;
}

const EditCommand = (props: EditCommandProps) => {
    const {command, onSave} = props;
    const [editedCommand, setEditedCommand] = useState(command);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setEditedCommand({...editedCommand, [name]: value});
    };

    const handleSubmit = () => {
        onSave(editedCommand);
    };

    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.title}>Edit Command</h2>
            </div>
            <div className={styles.field}>
                <label className={styles.label}>Name:</label>
                <input type="text" name="name" value={editedCommand.name} onChange={handleChange}
                       className={styles.input}/>
            </div>
            <div className={styles.field}>
                <label className={styles.label}>Shortcut:</label>
                <input type="text" name="shortcut" value={editedCommand.shortcut} onChange={handleChange}
                       className={styles.input}/>
            </div>
            {editedCommand.type === 'navigate' && (
                <div className={styles.field}>
                    <label className={styles.label}>URL:</label>
                    <input type="text" name="url" value={editedCommand.url} onChange={handleChange}
                           className={styles.input}/>
                </div>
            )}
            {editedCommand.type === 'copy' && (
                <div className={styles.field}>
                    <label className={styles.label}>Text to Copy:</label>
                    <input type="text" name="textToCopy" value={editedCommand.textToCopy} onChange={handleChange}
                           className={styles.input}/>
                </div>
            )}
            <div className={styles.buttons}>
                <button onClick={handleSubmit} className={styles.saveButton}>Save</button>
            </div>
        </div>
    );
};

export default EditCommand;
