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
    const { commands } = props;

    return (
        <div>
        <h1>Commands</h1>
        <ul>
            {commands.map((command) => (
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