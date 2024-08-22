import SearchCommandBar from "../SearchCommandBar/SearchCommandBar";
import {useState} from "react";

interface Command {
  id: string;
  name: string;
  url: string;
  shortcut: string;
}

interface CommandsDisplayProps {
  commands: Command[];
}


const CommandsDisplay = (props: CommandsDisplayProps) => {
    const {commands} = props;
    const [filteredCommands, setFilteredCommands] = useState(commands);

    const handleSearch = (query: string) => {
    const lowercasedQuery = query.toLowerCase();
    const newFilteredCommands = commands.filter(command =>
      command.name.toLowerCase().includes(lowercasedQuery) ||
      command.shortcut.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredCommands(newFilteredCommands);
  };
    return (
        <div>
            <h1>Commands</h1>
            <SearchCommandBar onSearch={handleSearch}/>
            <ul>
                {filteredCommands.map((command) => (
                    <li key={command.id}>
                        <a href={command.url} target="_blank" rel="noreferrer">
                            {command.name} ({command.shortcut})
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default CommandsDisplay;