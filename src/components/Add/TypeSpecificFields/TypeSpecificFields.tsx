import React from 'react';
import {Command, CommandType} from '../../../commands/commandTypes';

interface TypeSpecificFieldsProps {
    commandData: Partial<Command>;
    onFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TypeSpecificFields = (props: TypeSpecificFieldsProps) => {
    const {commandData, onFieldChange} = props;
    return (
        <div>
            {commandData.type === CommandType.Navigate && (
                <label>
                    URL:
                    <input
                        type="text"
                        name="url"
                        value={commandData.url || ""}
                        onChange={onFieldChange}
                    />
                </label>
            )}
            {commandData.type === CommandType.Copy && (
                <label>
                    Text to Copy:
                    <input
                        type="text"
                        name="textToCopy"
                        value={commandData.textToCopy || ""}
                        onChange={onFieldChange}
                    />
                </label>
            )}
        </div>
    );
};

export default TypeSpecificFields;
