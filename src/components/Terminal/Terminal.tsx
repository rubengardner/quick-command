import React, {useState} from 'react';
import styles from './Terminal.module.css';
import {commandRunner} from "../../commands/commandRunner";
import {Command} from "../../commands/commandTypes";


interface TerminalProps {
    commands: Command[];
    output: string;
    setOutput: (output: string) => void;
}

const Terminal = (props: TerminalProps) => {
    const {commands, output, setOutput} = props;
    const [input, setInput] = useState('');


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
