import SearchCommandBar from "../SearchCommandBar/SearchCommandBar";
import styles from "./CommandsDisplay.module.css";


interface Command {
    id: string;
    name: string;
    url: string;
    shortcut: string;
}

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
            <ul className={styles.commandList}>
                {commands.map((command) => (
                    <li onClick={() => onEdit(command)} key={command.id} className={styles.commandItem}>
            <span>
              {command.name} ({command.shortcut})
            </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommandsDisplay;