import SearchCommandBar from "../SearchCommandBar/SearchCommandBar";
import styles from "./CommandsDisplay.module.css";
import {Command} from "../../commands/commandTypes";


interface CommandsDisplayProps {
    commands: Command[];
    onEdit: (command: Command) => void;
    onSearch: (query: string) => void;
}


const CommandsDisplay = (props: CommandsDisplayProps) => {
    const {commands, onEdit, onSearch} = props;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Commands</h1>
            <div className={styles.searchBar}>
                <SearchCommandBar onSearch={onSearch}/>
            </div>
            <table className={styles.commandTable}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Shortcut</th>
                    <th>Type</th>
                </tr>
                </thead>
                <tbody>
                {commands.map((command) => (
                    <tr onClick={() => onEdit(command)} key={command.id} className={styles.commandRow}>
                        <td>{command.name}</td>
                        <td>{command.shortcut}</td>
                        <td>{command.type}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CommandsDisplay;