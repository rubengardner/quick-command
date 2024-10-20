import React, {useState} from 'react';
import {CommandType} from '../../../commands/commandTypes';
import styles from './AddCommand.module.css';
import TypeSpecificFields from "../TypeSpecificFields/TypeSpecificFields";


const AddCommand = () => {
    const [newCommand, setNewCommand] = useState({
        id: "",
        name: "",
        shortcut: "",
        type: CommandType.Navigate,
        fields: {},
    });

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = e.target;
        setNewCommand({
            ...newCommand,
            [name]: value,
            fields: {},
        });
    };

    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setNewCommand({
            ...newCommand,
            fields: {
                ...newCommand.fields,
                [name]: value,
            },
        });
    };

    const handleSubmit = () => {
        console.log('New command created:', newCommand);
        // Handle form submission logic
    };

    const commandValues = Object.values(CommandType);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Add Command</h2>
            <label className={styles.label}>
                Name:
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    value={newCommand.name}
                    onChange={(e) => setNewCommand({...newCommand, name: e.target.value})}
                />
            </label>
            <label className={styles.label}>
                Shortcut:
                <input
                    type="text"
                    className={styles.input}
                    name="shortcut"
                    value={newCommand.shortcut}
                    onChange={(e) => setNewCommand({...newCommand, shortcut: e.target.value})}
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
                type={newCommand.type}
                fields={newCommand.fields}
                handleFieldChange={handleFieldChange}
            />
            <button className={styles.saveButton} onClick={handleSubmit}>Add Command</button>
        </div>
    );
};

export default AddCommand;
