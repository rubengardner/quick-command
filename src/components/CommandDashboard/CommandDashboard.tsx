import React, {useState} from 'react';
import EditCommand from "../EditComand/EditCommand";
import CommandsDisplay from "../CommandsDisplay/CommandsDisplay";
import {Command} from "../../commands/commandTypes";


interface CommandDashboardProps {
    commands: Command[];
    setActiveTab: React.Dispatch<React.SetStateAction<'terminal' | 'commands' | 'add'>>;
    setOutput: (output: string) => void;
}

const CommandDashboard = (props: CommandDashboardProps) => {
    const {commands, setActiveTab, setOutput} = props;
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

    const onSave = () => {
        setActiveTab('terminal');
        setFilteredCommands(commands);
        setEditingCommand(null);
    };


    const handleEdit = (command: Command) => {
        setEditingCommand(command);
    };

    return (
        <div>
            {editingCommand ? (
                <EditCommand
                    command={editingCommand}
                    onSave={onSave}
                    setOutput={setOutput}
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
