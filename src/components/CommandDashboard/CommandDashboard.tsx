import React, {useState} from 'react';
import EditCommand from "../EditComand/EditCommand";
import CommandsDisplay from "../CommandsDisplay/CommandsDisplay";
import {Command} from "../../commands/commandTypes";


interface MenuProps {
    commands: Command[];
    handleSave: (newCommand: Command) => void;
}

const CommandDashboard = (props: MenuProps) => {
    const {commands, handleSave} = props;
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

    const onSave = (updatedCommand: Command) => {
        setFilteredCommands(commands);
        handleSave(updatedCommand);
        setEditingCommand(null);

    };


    return (
        <div>
            {editingCommand ? (
                <EditCommand
                    command={editingCommand}
                    onSave={onSave}
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

export default CommandDashboard;
