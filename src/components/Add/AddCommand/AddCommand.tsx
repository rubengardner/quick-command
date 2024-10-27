import React, {useState} from 'react';
import {Command, CommandType} from '../../../commands/commandTypes';
import styles from './AddCommand.module.css';
import TypeSpecificFields from "../TypeSpecificFields/TypeSpecificFields";
import useSaveCommands from "../../../dataAccess/useSaveCommands";


interface AddCommandProps {
    setActiveTab: React.Dispatch<React.SetStateAction<'terminal' | 'commands' | 'add'>>;
}

const AddCommand = (props: AddCommandProps) => {
    const {setActiveTab} = props;
    const saveCommands = useSaveCommands();
    const [newCommand, setNewCommand] = useState<Partial<Command>>({
        name: "",
        shortcut: "",
        type: CommandType.Navigate,
    });
    const [isAnimating, setIsAnimating] = useState(false);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = e.target;
        setNewCommand((prev) => ({
            ...prev,
            type: value as CommandType
        }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setNewCommand((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        setIsAnimating(true);
        saveCommands(newCommand);

        setTimeout(() => {
            setIsAnimating(false);
            setActiveTab('terminal');
        }, 500);
    };

    const commandValues = Object.values(CommandType);

    return (
        <div className={styles.container}>
            {isAnimating && <div className={styles.animationBackground}></div>}

            <h2 className={styles.title}>Add Command</h2>
            <label className={styles.label}>
                Name:
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    value={newCommand.name || ""}
                    onChange={handleInputChange}
                />
            </label>
            <label className={styles.label}>
                Shortcut:
                <input
                    type="text"
                    className={styles.input}
                    name="shortcut"
                    value={newCommand.shortcut || ""}
                    onChange={handleInputChange}
                />
            </label>
            <label className={styles.label}>
                Type:
                <select
                    name="type"
                    className={styles.commandType}
                    value={newCommand.type}
                    onChange={handleSelectChange}
                >
                    {commandValues.map((value) => (
                        <option key={value} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
            </label>
            <TypeSpecificFields
                commandData={newCommand}
                onFieldChange={handleInputChange}
            />
            <button className={styles.saveButton} onClick={handleSubmit} disabled={isAnimating}>
                Add Command
            </button>
        </div>
    );
};

export default AddCommand;
