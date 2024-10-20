import React, {useState} from 'react';
import styles from './Terminal.module.css';
import {commandRunner} from "../../commands/commandRunner";
import JsonCommands from '../../commands.json';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const commands = (JsonCommands);


    const handleCommand = (commandName: string) => {
        const command = commands.find(cmd => cmd.shortcut.toLowerCase() === commandName.toLowerCase());

        if (command) {
            commandRunner(command);
            setOutput(`Executed command: ${commandName}`);
        } else {
            setOutput(`Command not recognized: ${commandName}`);
        }

    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <div className={styles.commandline}>
            <div className={styles.prompt}>
                {output}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className={styles.commandinput}
                autoFocus
            />
        </div>
    );
};

export default Terminal;
