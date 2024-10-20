import React from 'react';
import {CommandType} from '../../../commands/commandTypes';
import styles from './TypeSpecificFields.module.css';

interface TypeSpecificFieldsProps {
    type: CommandType;
    fields: { [key: string]: string };
    handleFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TypeSpecificFields = (props: TypeSpecificFieldsProps) => {
    const {type, fields, handleFieldChange} = props;

    switch (type) {
        case CommandType.Navigate:
            return (
                <label className={styles.label}>
                    URL:
                    <input
                        className={styles.input}
                        type="text"
                        name="url"
                        value={fields.url || ''}
                        onChange={handleFieldChange}
                    />
                </label>
            );
        case CommandType.Copy:
            return (
                <label className={styles.label}>
                    Text to Copy:
                    <input
                        className={styles.input}
                        type="text"
                        name="textToCopy"
                        value={fields.textToCopy || ''}
                        onChange={handleFieldChange}
                    />
                </label>
            );
        default:
            return null;
    }
};

export default TypeSpecificFields;
