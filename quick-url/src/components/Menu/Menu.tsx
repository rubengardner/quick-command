import React, {useState} from 'react';
import EditCommand from "../EditComand/EditCommand";
import CommandsDisplay from "../CommandsDisplay/CommandsDisplay";

interface Command {
    id: string;
    name: string;
    url: string;
    shortcut: string;
}

interface MenuProps {
    commands: Command[];
}

const Menu = (props: MenuProps) => {
    const {commands} = props;
    const [filteredCommands, setFilteredCommands] = useState(commands);
    const [editingCommand, setEditingCommand] = useState<Command | null>(null);

    const handleSearch = (query: string) => {
        const lowercasedQuery = query.toLowerCase();
        const newFilteredCommands = commands.filter(command =>
            command.name.toLowerCase().includes(lowercasedQuery) ||
            command.shortcut.toLowerCase().includes(lowercasedQuery)
        );
        setFilteredCommands(newFilteredCommands);
    };

    const handleEdit = (command: Command) => {
        setEditingCommand(command);
    };

    const handleSave = (updatedCommand: Command) => {
        const updatedCommands = filteredCommands.map(cmd =>
            cmd.id === updatedCommand.id ? updatedCommand : cmd
        );
        setFilteredCommands(updatedCommands);
        setEditingCommand(null);
    };

    const handleCancel = () => {
        setEditingCommand(null);
    };

    return (
        <div>
            {editingCommand ? (
                <EditCommand
                    command={editingCommand}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            ) : (
                <CommandsDisplay
                    commands={filteredCommands}
                    onEdit={handleEdit}
                    onSearch={handleSearch}
                />
            )}
        </div>
    );
};

export default Menu;
